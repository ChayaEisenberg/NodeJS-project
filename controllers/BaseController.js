import autoBind from "auto-bind";

class BaseController {
    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {           
            const response = await this.service.getAll(req.query);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

    async get(req, res, next) {
        const id = req.params.id;
        try {
            const response = await this.service.getById(id);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default BaseController;