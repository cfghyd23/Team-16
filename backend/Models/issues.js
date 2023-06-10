const mongoose = require("mongoose")

const issuesSchema = new mongoose.Schema({
    date: { type: String, required: true },
    description: { type: String, required: true },
    types: { type: String, required: true},
    status: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true }
})

const user = mongoose.model("user", loginSchema)
module.exports = user