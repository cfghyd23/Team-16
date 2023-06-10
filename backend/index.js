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
        if (result.length !== 0) 
        {
            console.log("hurray")
            res.send("yes");
            return;
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

app.post("/register", async (req, res) => {
  console.log("here i am");
  const email = req.body.Email;
  const password = req.body.password;
  // const category = req.body.category;
  const name = req.body.name;
  const phoneNo = req.body.phoneNo;
  const city = req.body.city;
  const location = req.body.location;

  const registerModel = require("./Models/register");
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

app.post("/issues", async (req, res) => {
  const date = req.body.date;
  const description = req.body.description;
  const types = req.body.types;
  const status = req.body.status;
  const name = req.body.name;
  const email = req.body.email;
  const location = req.body.location;

  const issueModel = require("./Models/issues.js");
  const new_issue = new issueModel({
    date: date,
    description: description,
    types: types,
    status: status,
    name: name,
    email: email,
    location: location,
  });

  const new_issue_json = JSON.stringify(new_issue);

  try {
    await new_issue_json.save();
    console.log("added");
  } catch (err) {
    console.log("error");
  }

  return res.redirect("index.html");
});
