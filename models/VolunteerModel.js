// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    FirstName: String,
    LastName: String
});


// Compile model from schema
const VolunteerModel = mongoose.model("Volunteers", VolunteerSchema);
console.log(VolunteerModel);
export default VolunteerModel;