const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config({ path: "config.env" });

// Create an instance of Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_ID, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const database = mongoose.connection;
database.on("error", console.error.bind(console, "MongoDB connection error:"));
database.once("open", () => {
    console.log("Connected to MongoDB");
});

// Define a Mongoose schema for the issues collection
const issueSchema = new mongoose.Schema({
    name: String,
    description: String,
});

// Create a Mongoose model for the issues collection
const Issue = mongoose.model("Issue", issueSchema);

// Define a route to fetch data from the collection and send it to the frontend
app.get("/retrieve_issue", async(req, res) => {
    console.log("retreive")
    try {
        const collectionData = await Issue.find();

        // Send the data as a JSON response
        res.json(collectionData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});