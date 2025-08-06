import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
   title: { type: String, required: true },
   description: { type: String, required: true },
   skillTags: { type: [String], required: true },
   stipend: { type: Number, required: true },
   duration: { type: String, required: true },
   status: { type: String, enum: ['open', 'closed'], default: 'open' },
   companyid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   applicants: [{
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    resume: { type: String, required: true },
    appliedOn: { type: Date, default: Date.now },
    isShortlisted: { type: Boolean, default: false },
   }],
   shortlisted:[{
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    submissionlink: { type: String, required: true },
    submittedOn: { type: Date, default: Date.now },
    feedback: String,
    ratings: { type: Number, default: 0 }
   }],
   winner:{
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isstipendpaid: { type: Boolean, default: false },
    isratingdone: { type: Boolean, default: false },
    qrCode: { type: String, required: true },
    offerLetterURL: { type: String, required: true },
    offermessage: { type: String, required: true},
    offerAccepted: { type: Boolean, default: false },
   }



});

export default mongoose.model('Task', taskSchema);
