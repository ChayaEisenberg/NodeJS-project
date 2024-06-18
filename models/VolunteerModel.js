// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    FirstName: String,
    LastName: String
},{versionKey:false});


// Compile model from schema
const VolunteerModel = mongoose.model("VolunteerModel", VolunteerSchema,"Volunteers");
console.log(VolunteerModel);
export default VolunteerModel;