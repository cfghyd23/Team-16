const mongoose = require("mongoose")

const issuesSchema = new mongoose.Schema({
    date: { type: String, required: true },
    description: { type: String, required: true },
    types: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
})

const issues = mongoose.model("issues_db", issuesSchema)
module.exports = issues