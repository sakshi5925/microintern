import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   type: { type: String, enum: ['qr_request', 'qr_uploaded', 'stipend_paid', 'offer_letter'], required: true },
   message: { type: String, required: true },
   Link: { type: String, required: true },
   attachment:[{
    type: { type: String, enum: ['image', 'pdf','qr'], required: true },
    url: { type: String, required: true }
   }],
   read: { type: Boolean, default: false },
   createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Notification', notificationSchema);
