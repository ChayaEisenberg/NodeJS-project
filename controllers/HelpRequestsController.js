import BaseController from './BaseController.js';
import service from '../services/HelpRequestService.js';

class HelpRequestsController extends BaseController {
    constructor(service) {
        super(service);        
    }
    // async fetchId() {
    //     const response = await fetch('http://localhost:3000/api/volunteers/66724a3736a40483bcef9c1f');
    //     const data = await response.json();
    //     console.log(data._id);
    //   }
    //   async fetchDataSchema() {
    //     const response = await fetch('http://localhost:3000/api/HelpRequests/66607b7eef81677f7c80ebd6');
    //     const data = await response.json();
    //     console.log(data);
    //   }
    async update(req, res, next) {
        const id = req.params;
        const userId = req.query;
        const data =  req.body;
            data.VolunteerId = userId.Id;
            data.Status = 2;         
        try {
            const response = await this.service.update(id,userId, data);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default new HelpRequestsController(service);