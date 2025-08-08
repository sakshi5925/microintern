
import User from "../models/userModel.js";

export const StudentDocs = async (req, res) => {
       try {
        const {education, skills} = req.body;
        const email = req.user.email; 
        const resume = req.files['resume'][0].path;
        const profilePic = req.files['profilePic'][0].path;
        const user = await User.findOne({ email }); 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            {
                $set: {
                    "studentDetails.education": education,
                    "studentDetails.skills": skills,
                    "studentDetails.resume": resume,
                    "studentDetails.profilePicture": profilePic
                }
            },
            { new: true }
        );
        res.status(200).json({ updatedUser });

       } catch (error) {
           console.error("Error updating user:", error);
           res.status(500).json({ message: "Internal server error" });
       }
};