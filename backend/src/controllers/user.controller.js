import User from '../model/User.js'

export const usersProfile = async (req,res)=>{

    const {id} = req.params;
    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User found",user});

}

export const updateProfile = async (req,res)=>{
    const {id} = req.params;
    const {username,email,bio,department,year,skills,interest,socialMediaLink} = req.body;
    const user = await User.findByIdAndUpdate(id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    user.username = username;
    user.email = email;
    user.bio = bio;
    user.department = department;
    user.year = year;
    user.skills = skills;
    user.interest = interest;
    user.socialMediaLink = socialMediaLink;
    await user.save();
    res.status(200).json({message:"User updated",user});   
}

export const deleteProfile = async (req,res)=>{
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json({message:"User deleted",user});   
}