import BaseController from './BaseController.js';
import service from '../services/VolunteerService.js';

class VolunteersController extends BaseController {
    constructor(service) {
        super(service);        
    }
}
export default new VolunteersController(service);