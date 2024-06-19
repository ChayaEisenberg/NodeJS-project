import HelpRequestModel from "../models/HelpRequestModel.js";
import BaseRepo from "./BaseRepo.js";

class HelpRequestRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }

    async update(id, userId, data) {
        try {
            // let da = await this.model.Schema
            // da.Status = 2;
            // da.VolunteerId = userId;
            let request = await this.model.findByIdAndUpdate(id, data);
            console.log(request + " updated");
            return request;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error("An error occurred while trying to update the request's status. Please try again later.");
        }
    }

}
export default new HelpRequestRepo(HelpRequestModel);
