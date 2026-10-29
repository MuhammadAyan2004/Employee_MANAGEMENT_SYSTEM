require("dotenv").config();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userModel = require('./model/userModel')

const createSuperAdmin = async () => {
    const { DB_PATH, SUPERADMIN_NAME, SUPERADMIN_EMAIL, SUPERADMIN_PASSWORD, SUPERADMIN_USER_ID, SUPERADMIN_PHONE, SUPERADMIN_ADDRESS } = process.env

    if (!DB_PATH || !SUPERADMIN_NAME || !SUPERADMIN_EMAIL || !SUPERADMIN_PASSWORD || !SUPERADMIN_USER_ID || !SUPERADMIN_PHONE || !SUPERADMIN_ADDRESS) {
        throw new Error("Set DB_PATH, SUPERADMIN_NAME, SUPERADMIN_EMAIL, SUPERADMIN_PASSWORD, SUPERADMIN_USER_ID,SUPERADMIN_PHONE, and SUPERADMIN_ADDRESS before running the seed script")
    }

    if (SUPERADMIN_PASSWORD.length < 12) throw new Error("SUPERADMIN_PASSWORD must be at least 12 characters long.")

    await mongoose.connect(process.env.DB_PATH)
    const email = SUPERADMIN_EMAIL.trim()
    const exixtingUser = userModel.findOne({ $or: [{ email }, { userId: SUPERADMIN_USER_ID }] })

    if (exixtingUser) {
        console.log("A user with this super-admin email or user ID already exists. No changes made.");
        return
    }

    const hashedpassword = await bcrypt.hash(SUPERADMIN_PASSWORD, 12);
    await userModel.create({
        userName: SUPERADMIN_NAME,
        email,
        password: hashedpassword,
        role: "superAdmin",
        userId: SUPERADMIN_USER_ID,
        profileImage: "",
        phone: SUPERADMIN_PHONE,
        address: SUPERADMIN_ADDRESS,
        department: "Head of All Department",
        designation: "CEO",
        salary: "",
        joiningDate: new Date(),
        status: "active",
        createdBy: "System",
    })
    console.log("Spuper admin account created successfully")
    process.exit()
}

createSuperAdmin()
    .catch((err) => {
        console.error("super admin setup failed", err.message)
        process.exitCode = 1
    })
    .finally(async ()=>{
        if(mongoose.connection.readyState !== 0) await mongoose.disconnect()
    })

