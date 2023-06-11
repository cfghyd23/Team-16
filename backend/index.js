const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const registerModel = require("./Models/register");

const app = express();
app.use(express.static("public"));
dotenv.config({ path: "config.env" });
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


mongoose.connect(process.env.MONGO_ID);
const database = mongoose.connection;

const port = process.env.PORT || 8081;

app
    .get("/", (req, res) => {
        res.send("running....");
    })
    .listen(port, () => {
        console.log(`server running in the http://localhost:${port}`);
    });

// app.post("/login", async (req, response) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   database.collection("login_db").findOne({ email: email }, (err, res) => {
//     if (err) {
//       console.error(err);
//       return response.send("Error occurred during login");
//     }

//     if (!res) {
//       return response.send(
//         "Invalid information! Please create an account first"
//       );
//     }

//     if (res.password === password) {
//       return response.redirect("index.html");
//     } else {
//       return response.send("Invalid Password!");
//     }
//   });
// });

app.post("/login_db", async(req, res) => {
    const e = req.body.email
    const p = req.body.password
    console.log({
        "email": e,
        "password": p,
    })

    // console.log("Name is: ", n, " Password is: ", p)
    registerModel.find({ email: e, password: p }).then(function(result, err) {
        console.log(result)
        if (result.length !== 0) {
            if (result[0].email.indexOf("admin") === -1) {
                res.send("success user");
                return;
            } else {
                res.send("success admin");
                return;
            }
        }

        if (result.length === 0) {
            res.send("Invalid password/name")
            return;
        }
        if (err) {
            console.log(err);
        }
    })

})

app.post("/register", async(req, res) => {
    console.log("here i am");
    const email = req.body.Email;
    const password = req.body.password;
    // const category = req.body.category;
    const name = req.body.name;
    const phoneNo = req.body.phoneNo;
    const city = req.body.city;
    const location = req.body.location;

    const new_user = new registerModel({
        name: name,
        password: password,
        city: city,
        email: email,
        // category: category,
        phoneNo: phoneNo,
    });
    console.log(new_user);

    try {
        await new_user.save();
        console.log("added");
        res.send("yes");
        return;
    } catch (err) {
        console.log(err);
        console.log("error");
    }
});

const issueModel = require("./Models/issues")
app.get("/data", async(req, res) => {
    issueModel.find({}).then(function(err, result) {
        if (err) {
            res.send(err)
            return;
        }
        res.send(result)
        return;
    })
})

app.post("/addIssue", async(req, res) => {
    console.log("here i am");
    const email = req.body.email;
    const name = req.body.name;
    // const category = req.body.category;
    const date = req.body.date;
    const description = req.body.desc;
    const type = req.body.type;

    const new_issue = new issueModel({
        name: name,
        description: description,
        types: type,
        email: email,
        date: date
    });
    console.log(new_issue);

    try {
        await new_issue.save();
        console.log("added");
        res.send("yes");
        return;
    } catch (err) {
        console.log(err);
        console.log("error");
    }
});