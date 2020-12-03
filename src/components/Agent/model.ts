import mongoose from 'mongoose';
const AgentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subsNumber:{
        type: String,
        required: true,
    }
});

const AgentModel = mongoose.model('Agent', AgentSchema);
export default AgentModel;