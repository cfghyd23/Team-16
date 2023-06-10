const mongoose = require("mongoose")

const issuesSchema = new mongoose.Schema({
    description: { type: String, required: true },
    types: { type: String },
    status: { type: Number },
    name: { type: String, required: true },
    date: { type: String, required: true },
})

const user = mongoose.model("user", loginSchema)
module.exports = user