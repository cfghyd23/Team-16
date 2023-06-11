import React, { useState, useEffect } from "react";
import Axios from "axios";

function Tracking() {
  const [issues, setTracking] = useState([]);

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Format the date as dd-mm-yyyy with leading zeros
    const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate.getFullYear()}`;
    console.log(formattedDate)
    // Construct the URL
    const url = `http://localhost:5000/tracking/${formattedDate}`;
    console.log(url);

    // Fetch the issues data from the backend
    Axios.get(url)
      .then((response) => {
        setTracking(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* <AdminHome /> */}
      <div className="mainDiv m-5">
        <h1>Tracking</h1>
        <table className="mt-4">
          <tbody>
            {issues.map((val, key) => (
              <tr key={key} className="border border-dark rounded">
                <td>
                  <p>{val.Name}</p>
                </td>
                <td>
                  <p>{val.Email}</p>
                </td>
                <td>
                  <p>{val.Date}</p>
                </td>
                <td>
                  <p>{val.Num_days}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tracking;
