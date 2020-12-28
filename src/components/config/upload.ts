import { Request } from 'express';
import multer from "multer";
import path from "path";

const imagePath = path.resolve(__dirname, '../../ImageUpload');

export default {
    directory: imagePath,
    storage: multer.diskStorage({
        destination(req, file, callback) {
            const folder = file.fieldname === 'image' ? 'ImageUpload' : 'AudioUpload'

            return callback(null, path.resolve(__dirname, `../../${folder}`))
        },
        filename(req, file, callback){
            const fileName =  `${Date.now()}-${file.originalname.trim()}`;
            return callback(null, fileName)
        }
    })
}