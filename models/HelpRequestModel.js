import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HelpRequestSchema = new Schema({
    ProblemType: Number,
    ProblemDescription: String,
    PhoneNumber: String,
    Status: Number,
    Urgency: Number,
    ID: Number
},
{versionKey:false});


// Compile model from schema
const HelpRequestModel = mongoose.model("HelpRequestModel", HelpRequestSchema,"HelpRequest");
console.log(HelpRequestModel);
export default HelpRequestModel;