import {AgentModel} from "./index";
export default class AgentService {
    public static async create(agent: {
      name: string;
      subsNumber: string;
    }) {
        try {
            const created =  await AgentModel.create(agent);
            return created;
        } catch (error) {
            console.error(error)
        }
    }
  
    public static async findAll() {
        try {
            return await AgentModel.find();
        } catch (error) {
            console.error(error)
        }
    }
  
    public static async findById(id: string) {
        try {
            const result = await AgentModel.findOne({subsNumber:id})
            if (result){
                return result
            }else(
                console.log("erro")
            )
            
        } catch (error) {
            console.error(error)
        }
    }
  
    public static async update(id: string, agent: {
        name: string;
    }) {
      
        try {
            const updated =  await AgentModel.findOneAndUpdate({subsNumber:id},agent, {new: true});
            return updated;
            
        } catch (error) {
            console.error(error)
        }
    }
  
    public static async delete(id: string) {
        try {
            const deleted = await AgentModel.findOneAndDelete({subsNumber:id})
            return deleted;
        } catch (error) {
            console.error(error)
        }
    }

}