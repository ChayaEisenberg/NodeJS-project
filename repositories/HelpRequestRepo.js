import HelpRequestModel from "../models/HelpRequestModel.js";
import BaseRepo from "./BaseRepo.js";

class HelpRequestRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}

//module.exports = new StudentRepo();
export default new HelpRequestRepo(HelpRequestModel);