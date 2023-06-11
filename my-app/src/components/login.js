import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import "./Register.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const logUsr = () => {
    console.log("here");
    console.log(email);
    console.log(password);
    Axios.post("http://localhost:8081/login_db", {
      email: email,
      password: password,
    }).then((response) => {
      console.log("validating");
      if (response.data === "success user") window.location.replace("/User");
      if (response.data === "success admin") window.location.replace("/Home");
      if (response.data === "Invalid password/name")
        alert("Invalid password/name");
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
                    type="Email"
                    name="email"
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
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-success mt-n1"
            onClick={logUsr}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
