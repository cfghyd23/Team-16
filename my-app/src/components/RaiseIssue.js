import React, { useState } from "react";
import Axios from "axios";

function RaiseIssue() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  date = mm + "/" + dd + "/" + yyyy;
  const addIssue = () => {
    console.log("here");
    Axios.post("http://localhost:8081/addIssue", {
      name: name,
      email: email,
      type: type,
      desc: desc,
      date: date,
    }).then((res) => {
      if (res.data === "yes") window.location.replace("/User");
    });
  };
  return (
    <div
      className="container mt-4"
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2>Raise Request</h2>
      <form>
        <div className="form-group" style={{ margin: "10px" }}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            name="Name"
            onChange={(event) => {
              setname(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ margin: "10px" }}>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ margin: "10px" }}>
          <label htmlFor="Email">Type:</label>
          <input
            type="type"
            id="type"
            name="type"
            onChange={(event) => {
              setType(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ margin: "10px" }}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            style={{ width: "95%" }}
            name="title"
            required
          />
        </div>
        <div className="form-group" style={{ margin: "10px" }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn-submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={addIssue}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RaiseIssue;
