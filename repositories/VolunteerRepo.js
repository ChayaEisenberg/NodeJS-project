
import StudentModel from "../models/VolunteerModel.js";
import BaseRepo from "./BaseRepo.js";

class VolunteerRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}

//module.exports = new StudentRepo();
export default new VolunteerRepo(StudentModel);