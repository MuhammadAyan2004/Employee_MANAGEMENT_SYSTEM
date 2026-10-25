require("dotenv").config();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userModel = require('./model/userModel')

const createSuperAdmin = async ()=>{
    try{
        await mongoose.connect(process.env.DB_PATH)
        const hashedpassword = bcrypt.hash("superaAdmin@123",12);
        const superAdmin = new userModel({
            userName: "Muhammad Ayan",
            email: "superAdmin@gmail.com",
            password: (await hashedpassword).toString(),
            role: "superAdmin",
            userId: "SA001",
            profileImage: "",
            phone: 923190570477,
            address: "house#42, sq-55, sheet-26, model colony, karachi, Pakistan",
            department: "Head of All Department",
            designation: "CEO",
            salary: "",
            joiningDate: "2026-9-15",
            status:"active",
            createdBy: "System",
        })
        await superAdmin.save()
        console.log("Spuper admin was created...")
        process.exit() 
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

createSuperAdmin()

