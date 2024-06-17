//const repo = require('../repositories/StudentRepo.js');
//const BaseService = require('./BaseService.js');
import repo from '../repositories/VolunteerRepo.js';
import BaseService from './BaseService.js';
class VolunteerService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}

//module.exports = new StudentService(repo);
export default new VolunteerService(repo);