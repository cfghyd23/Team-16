const mongoose = require("mongoose")

const announcementsSchema = new mongoose.Schema({
    description: { type: String, required: true },
    types: { type: String },
    status: { type: Number },
    name: { type: String, required: true },
    eventTitle: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
})

const announcements = mongoose.model("announcements", announcementsSchema)
module.exports = announcements