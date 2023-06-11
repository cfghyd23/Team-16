import React, { useState, useEffect } from "react";
import Axios from "axios";
import AdminHome from "./AdminHome";

function Issues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // Fetch the issues data from the backend
    Axios.get("http://localhost:8081/data")
      .then((response) => {
        setIssues(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* <AdminHome /> */}
      <div className="mainDiv m-5">
        <h1>Issues</h1>
        <table className="mt-4">
          <thead>
            <tr>
              <th>User</th>
              <th>Description</th>
              <th>Type</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((val, key) => (
              <tr key={key} className="border border-dark">
                <td>
                  <p>{val.name}</p>
                </td>
                <td>
                  <p>{val.description}</p>
                </td>
                <td>
                  <p>{val.types}</p>
                </td>
                <td>
                  <p>{val.email}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Issues;
