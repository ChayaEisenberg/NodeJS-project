import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HelpRequestSchema = new Schema({
    
    ProblemDescription : String,
    PhoneNumber : String

},
{versionKey:false});


// Compile model from schema
const HelpRequestModel = mongoose.model("HelpRequestModel", HelpRequestSchema,"HelpRequest");
console.log(HelpRequestModel);
export default HelpRequestModel;