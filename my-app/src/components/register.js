import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import "./Register.css";

function Register() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [Email, setemail] = useState("");
  const [phone_No, setphoneno] = useState(0);
  const [city, setcity] = useState("");
  const [location, setlocation] = useState("");
  // const [category, setcategory] = useState("");
  //   useEffect(() => {
  //     Axios.get("http://localhost:3001/data").then((response) => {
  //       setUserList(response.data);
  //     });
  //   }, []);

  const addToList = () => {
    console.log("here");
    Axios.post("http://localhost:8081/register", {
      name: name,
      password: password,
      Email: Email,
      phone_No: phone_No,
      city: city,
      location: location,
    }).then((res) => {
      if (res.data === "yes") window.location.replace("/Login");
    });
  };
  return (
    <div className="LoginDiv">
      <form action="">
        <div className="p-auto m-5 d-flex align-items-center justify-content-center p-5">
          <table className="p-5">
            <tbody>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    name="Email"
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="text"
                    name="password"
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={(event) => {
                      setname(event.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Phone_No</td>
                <td>
                  <input
                    type="Number"
                    name="phone_No"
                    onChange={(event) => {
                      setphoneno(event.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <input
                    type="text"
                    name="city"
                    onChange={(event) => {
                      setcity(event.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>
                  <input
                    type="text"
                    name="Location"
                    onChange={(event) => {
                      setlocation(event.target.value);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>category</td>
                <td>
                  <select name="category">
                    <option value="option1">Admin</option>
                    <option value="option2">Young Adult</option>
                    <option value="option3">(15-18)years</option>
                    {/* Add more options as needed */}
                    {/* onChange=
                    {(event) => {
                      setcategory(event.target.value);
                    }} */}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-success mt-n1"
            onClick={addToList}
          >
            Register
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-primary mt-n1"></button>
        </div>
      </form>
    </div>
  );
}

export default Register;
