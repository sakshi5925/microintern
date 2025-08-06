import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillTags: { type: [String], required: true },
  stipend: { type: Number, required: true },
  duration: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },

  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  applicants: [{
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    resume: { type: String, required: true },
    appliedOn: { type: Date, default: Date.now },
    isShortlisted: { type: Boolean, default: false },
  }],

  shortlisted: [{
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    submissionlink: { type: String, required: true },
    submittedOn: { type: Date, default: Date.now },
    feedback: String,
    ratings: { type: Number, default: 0 }
  }],

  winner: {
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isstipendpaid: { type: Boolean, default: false },
    isratingdone: { type: Boolean, default: false },
    qrCode: { type: String }, 
    offerLetterURL: { type: String },
    offermessage: { type: String },
    offerAccepted: { type: Boolean, default: false },
  }
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
