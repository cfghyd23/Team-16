const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
dotenv.config({ path: "config.env" });
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

mongoose.connect(process.env.MONGO_STRING);
const database = mongoose.connection;

const port = process.env.PORT || 8080;

app
    .get("/", (req, res) => {
        res.send("running....");
    })
    .listen(port, () => {
        console.log(`server running in the http://localhost:${port}`);
    });


app.post("/login", async(req, response) => {
    const email = req.body.email;
    const password = req.body.password;

    database.collection("login_db").findOne({ email: email }, (err, res) => {
        if (err) {
            console.error(err);
            return response.send("Error occurred during login");
        }

        if (!res) {
            return response.send(
                "Invalid information! Please create an account first"
            );
        }

        if (res.password === password) {
            return response.redirect("index.html");
        } else {
            return response.send("Invalid Password!");
        }
    });
});


app.post("/register", async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const category = req.bofy.category;
    const name = req.body.name;
    const phone_no = req.body.phone_no;
    const city = req.body.city;

    const registerModel = require("./Models/register")
    const new_user = new registerModel({
        name: name,
        password: password,
        city: city,
        email: email,
        category: category,
        phone_no: phone_no,
    })
    try {
        await user.save()
        console.log("added")
    } catch (err) {
        console.log("error")
    }

    database.collection("login_db").insertOne(newRecord);

    return res.redirect("index.html");
});