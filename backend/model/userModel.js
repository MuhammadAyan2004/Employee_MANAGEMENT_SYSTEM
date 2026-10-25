const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {type:String, required:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {type:String, enum:["superAdmin", "admin", "employee"], default:"superAdmin"},
    userId: { type: String, required: true, unique:true },
    profileImage: {type:String },
    phone: {type:Number},
    address: {type:String},
    department: { type: String, required: true },
    designation: { type: String, required: true },
    salary: {type:String},
    joiningDate: { type: String, required: true },
    status: {
        type:String,
        enum: ["active","inactive"],
        default: "active"
    },
    createdBy: {type:String, required:true},
    createdAt: {type:Date, default:Date.now},
})

module.exports = mongoose.model("userModel", userSchema)