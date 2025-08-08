import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinaryConfig.js';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:async (req, file) => {
        let folder='uploads';
        if(file.fieldname === 'resume') {
            folder = 'resumes';
        }
        else if (file.fieldname === 'profilePic') {
      folder = 'profile_pics';
    }
    return {
      folder: folder,
      allowed_formats: ['pdf', 'docx', 'jpg', 'jpeg', 'png'],
      public_id: `${file.originalname}-${Date.now()}`,
    };
}
});
const upload = multer({ storage });
export default upload;
