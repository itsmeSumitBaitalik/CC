import User from '../model/User.js'

export const usersProfile = async (req,res)=>{

    const userId = req.user.id; // ✅ comes from auth middleware
    
    const user = await User.findById(userId);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User found",user});

}

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Remove sensitive fields if any
    delete updateData.password;
    delete updateData.role;

    // Check if profile is complete based on required fields
    const requiredFields = ['fname', 'lname', 'college', 'dept', 'year', 'rollno'];
    const isComplete = requiredFields.every(field => updateData[field] || (req.user && req.user[field]));

    const user = await User.findByIdAndUpdate(
      id,
      { 
        ...updateData,
        isProfileComplete: isComplete 
      },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProfile = async (req,res)=>{
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User deleted",user});   
}

export const updateUserRole = async (req, res) => {
  const { role } = req.body;

  // only allow valid roles
  if (!['student', 'mentor'].includes(role)) {
    return res.status(400).json({ success: false, message: 'Invalid role' });
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role },
    { new: true }
  );

  res.json({ success: true, user });
}