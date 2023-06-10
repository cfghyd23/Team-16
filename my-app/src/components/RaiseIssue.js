import React from "react";

function RaiseIssue() {
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
          <input type="text" id="Name" name="Name" value="abc" disabled />
        </div>
        <div className="form-group" style={{ margin: "10px" }}>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value="abc.in@xyz.com"
            disabled
          />
        </div>
        <div className="form-group" style={{ margin: "10px" }}>
          <label htmlFor="PhNo">Ph. No.:</label>
          <input type="tel" id="PhNo" name="PhNo" value="987654321" disabled />
        </div>
        <div className="form-group" style={{ margin: "10px" }}>
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            id="type"
            className="selectEle"
            style={{
              height: "40px",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "vertical",
              fontFamily: "Arial, sans-serif",
              fontSize: "15px",
            }}
          >
            <option value="Medical">Medical Help Needed</option>
            <option value="Financial">Financial Help Needed</option>
            <option value="Education">Educational Help Needed</option>
            <option value="Employment">Employment Help Needed</option>
            <option value="Others">Others</option>
          </select>
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
          <textarea id="description" name="description" rows="5" required />
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
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RaiseIssue;
