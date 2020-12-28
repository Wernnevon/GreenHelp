import multer from "multer";
import path from "path";

const imagePath = path.resolve(__dirname, '../../ImageUpload');

export default {
    directory: imagePath,
    storage: multer.diskStorage({
        destination: imagePath,
        filename(req, file, callback){
            const fileName =  `${Date.now()}-${file.originalname.trim()}`;
            return callback(null, fileName)
        }
    })
}