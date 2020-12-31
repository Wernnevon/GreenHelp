import { Status } from './status';
import mongoose from 'mongoose';
const DenouncementSchema = new mongoose.Schema({
    image: {
        type: [String],
        required: true,
    },
    description:{
        type: [String],
        required: true,
    },
    creationDate:{
        type: Date,
        default: Date.now,
    }, 
    feedback: {
        type: Boolean,
        default: false
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'ENVIADO',
    },
    code: {
        type: String,
        required: true
    }
});

const DenouncementModel = mongoose.model('Denouncement', DenouncementSchema);
export default DenouncementModel;