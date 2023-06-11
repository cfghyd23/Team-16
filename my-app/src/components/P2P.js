import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";

const P2P = () => {
  return (
    <div className="container">
      <h1 className="table-title">You can connect with anyone here</h1>
      <table
        className="table table-striped"
        style={{ margin: "15px 50px 10px 50px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Hyderabad</td>
            <td>
              <button className="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Hyderabad</td>
            <td className="request_btn" style={{ width: "100px" }}>
              <button className="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>Hyderabad</td>
            <td>
              <button class="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Alice Williams</td>
            <td>Hyderabad</td>
            <td>
              <button class="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Mike Brown</td>
            <td>Hyderabad</td>
            <td>
              <button class="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Mike Brown</td>
            <td>Hyderabad</td>
            <td>
              <button class="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Mike Brown</td>
            <td>Hyderabad</td>
            <td>
              <button class="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Mike Brown</td>
            <td>Hyderabad</td>
            <td>
              <button class="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Mike Brown</td>
            <td>Hyderabad</td>
            <td>
              <button class="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          <tr>
            <td>Mike Brown</td>
            <td>Hyderabad</td>
            <td>
              <button class="btn btn-primary btn-lg">Message</button>
            </td>
          </tr>
          {/* Rest of the table rows */}
        </tbody>
      </table>
    </div>
  );
};

export default P2P;
