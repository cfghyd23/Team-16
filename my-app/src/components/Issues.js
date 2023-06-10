import React from "react";
import AdminHome from "./AdminHome";

const issues = [
  { name: "Test", description: "I want to raise funds" },
  {
    name: "Test2",
    description: "Few children have health issues and I want funds",
  },
];
function Issues() {
  return (
    <div>
      {/* <AdminHome /> */}
      <div className="mainDiv m-5">
        <h1>Issues</h1>
        <table className="mt-4">
          {issues.map((val, key) => {
            return (
              <tr key={key} className="border border-dark">
                <td>
                  <p>{val.name}</p>
                </td>
                <td>
                  <p>{val.description}</p>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Issues;
