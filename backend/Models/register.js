const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    // category: { type: String, required: true },
    phoneNo: { type: Number }
})

const register = mongoose.model("registeredUsers", registerSchema)
module.exports = register