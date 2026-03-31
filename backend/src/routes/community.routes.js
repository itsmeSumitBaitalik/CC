import express from "express";
import {
  getAllCommunities,
  getCommunityById,
  createCommunity,
  updateCommunity,
  deleteCommunity,
  joinCommunity,
  leaveCommunity,
  getCommunityPosts,
  createPost,
  deletePost,
  likeUnlikePost,
} from "../controllers/community.controller.js";
import { restrictTo, adminOnly } from "../middlewares/auth.middlewares.js";

const communityRoute = express.Router();

// ── Communities CRUD ───────────────────────────────
communityRoute.get("/",           getAllCommunities);
communityRoute.get("/:id",        getCommunityById);
communityRoute.post("/create",    restrictTo("mentor"), createCommunity);
communityRoute.put("/:id",        restrictTo("mentor"), updateCommunity);
communityRoute.delete("/:id",     adminOnly,            deleteCommunity);

// ── Membership ─────────────────────────────────────
communityRoute.post("/:id/join",  joinCommunity);
communityRoute.delete("/:id/leave", leaveCommunity);

// ── Posts ──────────────────────────────────────────
communityRoute.get("/:id/posts",                    getCommunityPosts);
communityRoute.post("/:id/posts",                   createPost);
communityRoute.delete("/:id/posts/:postId",         deletePost);
communityRoute.post("/:id/posts/:postId/like",      likeUnlikePost);

export default communityRoute;