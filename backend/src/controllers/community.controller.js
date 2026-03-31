import Community from "../model/Community.js";
import Post from "../model/Post.js";

// ── GET /api/dashboard/communities ────────────────
export const getAllCommunities = async (req, res) => {
  try {
    const { search, category } = req.query;
    const filter = { isActive: true };

    if (search)   filter.name     = { $regex: search, $options: "i" };
    if (category) filter.category = category;

    const communities = await Community.find(filter)
      .populate("createdBy", "username avatar")
      .sort({ createdAt: -1 });

    // mark which ones the user has joined
    const result = communities.map((c) => ({
      ...c.toObject(),
      isJoined: c.members.some((m) => m.toString() === req.user.id.toString()),
    }));

    res.json({ success: true, count: result.length, communities: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── GET /api/dashboard/communities/:id ────────────
export const getCommunityById = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id)
      .populate("createdBy", "username avatar")
      .populate("members", "username avatar");

    if (!community) {
      return res.status(404).json({ success: false, message: "Community not found" });
    }

    res.json({
      success: true,
      community: {
        ...community.toObject(),
        isJoined: community.members.some((m) => m._id.toString() === req.user.id.toString()),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── POST /api/dashboard/communities/create ────────
export const createCommunity = async (req, res) => {
  try {
    const { name, description, category, coverImage } = req.body;

    if (!name || !description || !category) {
      return res.status(400).json({ success: false, message: "Name, description and category are required" });
    }

    const existing = await Community.findOne({ name });
    if (existing) {
      return res.status(409).json({ success: false, message: "Community name already taken" });
    }

    const community = await Community.create({
      name,
      description,
      category,
      coverImage,
      createdBy: req.user.id,
      members: [req.user.id], // creator auto-joins
    });

    res.status(201).json({ success: true, message: "Community created", community });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── PUT /api/dashboard/communities/:id ────────────
export const updateCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);

    if (!community) {
      return res.status(404).json({ success: false, message: "Community not found" });
    }

    if (community.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const { name, description, category, coverImage } = req.body;

    const updated = await Community.findByIdAndUpdate(
      req.params.id,
      { name, description, category, coverImage },
      { new: true, runValidators: true }
    );

    res.json({ success: true, message: "Community updated", community: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── DELETE /api/dashboard/communities/:id ─────────
export const deleteCommunity = async (req, res) => {
  try {
    const community = await Community.findByIdAndDelete(req.params.id);

    if (!community) {
      return res.status(404).json({ success: false, message: "Community not found" });
    }

    // delete all posts in this community too
    await Post.deleteMany({ community: req.params.id });

    res.json({ success: true, message: "Community deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── POST /api/dashboard/communities/:id/join ──────
export const joinCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);

    if (!community) {
      return res.status(404).json({ success: false, message: "Community not found" });
    }

    const alreadyJoined = community.members.some(
      (m) => m.toString() === req.user.id.toString()
    );

    if (alreadyJoined) {
      return res.status(409).json({ success: false, message: "Already a member" });
    }

    community.members.push(req.user.id);
    await community.save();

    res.json({ success: true, message: "Joined community", memberCount: community.members.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── DELETE /api/dashboard/communities/:id/leave ───
export const leaveCommunity = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);

    if (!community) {
      return res.status(404).json({ success: false, message: "Community not found" });
    }

    // creator cannot leave their own community
    if (community.createdBy.toString() === req.user.id.toString()) {
      return res.status(400).json({ success: false, message: "Creator cannot leave. Delete the community instead." });
    }

    community.members = community.members.filter(
      (m) => m.toString() !== req.user.id.toString()
    );
    await community.save();

    res.json({ success: true, message: "Left community", memberCount: community.members.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── GET /api/dashboard/communities/:id/posts ──────
export const getCommunityPosts = async (req, res) => {
  try {
    const posts = await Post.find({ community: req.params.id })
      .populate("author", "username avatar")
      .sort({ createdAt: -1 });

    const result = posts.map((p) => ({
      ...p.toObject(),
      isLiked: p.likes.some((l) => l.toString() === req.user.id.toString()),
    }));

    res.json({ success: true, count: result.length, posts: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── POST /api/dashboard/communities/:id/posts ─────
export const createPost = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);

    if (!community) {
      return res.status(404).json({ success: false, message: "Community not found" });
    }

    // must be a member to post
    const isMember = community.members.some(
      (m) => m.toString() === req.user.id.toString()
    );
    if (!isMember) {
      return res.status(403).json({ success: false, message: "Join the community to post" });
    }

    const { content, image } = req.body;

    if (!content) {
      return res.status(400).json({ success: false, message: "Post content is required" });
    }

    const post = await Post.create({
      community: req.params.id,
      author: req.user.id,
      content,
      image,
    });

    await post.populate("author", "username avatar");

    res.status(201).json({ success: true, message: "Post created", post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── DELETE /api/dashboard/communities/:id/posts/:postId
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    // only author or admin can delete
    if (post.author.toString() !== req.user.id.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    await Post.findByIdAndDelete(req.params.postId);

    res.json({ success: true, message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── POST /api/dashboard/communities/:id/posts/:postId/like
export const likeUnlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    const alreadyLiked = post.likes.some(
      (l) => l.toString() === req.user.id.toString()
    );

    if (alreadyLiked) {
      // unlike
      post.likes = post.likes.filter(
        (l) => l.toString() !== req.user.id.toString()
      );
    } else {
      // like
      post.likes.push(req.user.id);
    }

    await post.save();

    res.json({
      success: true,
      liked: !alreadyLiked,
      likeCount: post.likes.length,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};