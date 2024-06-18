import repo from '../repositories/HelpRequestRepo.js';
import BaseService from './BaseService.js';
class HelpRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}
export default new HelpRequestService(repo);