import connect from './db.js';
import aggregation from '../Pipelline/aggregation.js'
class BaseRepo {
    constructor(model) {
        this.model = model;
        //autoBind(this);
        connect();
    }

    async getAll() {
        let agg = aggregation()
        let data = await this.model.aggregate(agg).exec();
        console.log(data);
        return data;

    }


    async get(id) {
        try {
            let agg = aggregation()
            let data2 = await this.model.find({}).exec();
            console.log("data2" + data2); 
            
            let data = await this.model.aggregate(agg).exec(); 
            console.log(data);
            let data1 = data.slice(0,2);
            console.log(data1 + "data1");
            data = data.findById(id);
            console.log(data);
            return data;  
        }

        catch (errors) {
            throw errors;
        }
    }

    async insert(data) {
        try {
            let item = await this.model.create(data);
            if (item) {
                return new HttpResponse(item);
            } else {
                throw new Error('Something wrong happened');
            }
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, { new: true });
            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        try {
            let item = await this.model.findByIdAndDelete(id);
            if (!item) {
                let error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            } else {
                return new HttpResponse(item, { deleted: true });
            }
        } catch (errors) {
            throw errors;
        }
    }
}

//module.exports = BaseRepo;
export default BaseRepo;