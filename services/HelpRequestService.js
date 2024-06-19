import repo from '../repositories/HelpRequestRepo.js';
import BaseService from './BaseService.js';
class HelpRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }
    async update(id,userId, data){
        try{
            // data.Status = 2;
            // data.VolunteerId = id;
            return await this.repo.update(id, userId,data);
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to update request.");
        }
    }
}
export default new HelpRequestService(repo);