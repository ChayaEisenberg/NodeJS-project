class BaseService {
    constructor(repo) {
        this.repo = repo;
    }

    async getAll() {        
        return await this.repo.getAll();
      }
    
      async getById(id) {
        console.log(id+"service")
        return await this.repo.get(id);
      }
    
      async insert(data) {
        // try {
        //   const response = await this.service.insert(req.body);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async update(id, data) {
        // const { id } = req.params;
        // try {
        //   const response = await this.service.update(id, req.body);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async delete(id) {
        // const { id } = req.params;
        // try {
        //   const response = await this.service.delete(id);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }

}

//module.exports = BaseService;
export default BaseService;