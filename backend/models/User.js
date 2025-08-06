import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'company'], required: true },
  
  studentDetails: {
    education: { type: String },
    skills: { type: String },
    resume: { type: String },
    profilePicture: { type: String },
    appliedTask: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
    ratings: [
      {
        taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
        rating: Number,
        feedback: String,
      }
    ]
  },

  companyDetails: {
    description: { type: String },
    logo: { type: String },
    website: { type: String },
    postedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
  },

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
