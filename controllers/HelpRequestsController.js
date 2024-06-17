

import BaseController from './BaseController.js';
import service from '../services/VolunteerService.js';

class HelpRequestsController extends BaseController {
    constructor(service) {
        super(service);        
    }
}
export default new HelpRequestsController(service);