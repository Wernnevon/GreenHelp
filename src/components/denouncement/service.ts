import { Status } from './status';
import DenouncementModel from "./model";
export default class DenouncementService {
    public static async create(denouncement: {
      image: string[];
      description: string[];
      latitude: string;
      longitude: string;
      code: string;
    }) {
        try {
            const created =  await DenouncementModel.create(denouncement);
            return created;
        } catch (error) {
            console.error(error)
        }
    }
  
    public static async findAll() {
        try {
            return await DenouncementModel.find();
        } catch (error) {
            console.error(error)
        }
    }
  
    public static async findById(id: string) {
        try {
            const result = await DenouncementModel.findOne({code:id})
            return result
            
        } catch (error) {
            console.error(error)
        }
    }
  
    public static async update(id: string, denouncement: {
        status: Status;
        feedback: boolean; 
    }) {
      
        try {
            const updated =  await DenouncementModel.findOneAndUpdate({code:id},denouncement, {new: true});
            return updated;
            
        } catch (error) {
            console.error(error)
        }
    }
  
    public static async delete(id: string) {
        try {
            const deleted = await DenouncementModel.findOneAndDelete({code:id})
            return deleted;
        } catch (error) {
            console.error(error)
        }
    }

}