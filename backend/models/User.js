import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    user:{
        name:{type: String, required: true},
        email:{type: String, required: true, unique: true},
        password:{type: String, required: true},
        role:{type: String, enum: ['student', 'company']},
        studentDetails:{
            education: { type: String, required: true },
            skills: { type: String, required: true },
            resume: { type: String, required: true },
            profilePicture: { type: String, required: true },
            appliedTask: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
            ratings:[{
                taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
                rating:Number,
                feedback: String
            }]
        },
        companyDetails:{
            description: { type: String, required: true },
            logo: { type: String, required: true },
            website: { type: String, required: true },
            postedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],

    }}
});
export default mongoose.model('User', userSchema);
