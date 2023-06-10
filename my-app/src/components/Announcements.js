import React from "react";
import AdminHome from "./AdminHome";
class Announcements extends React.Component {
  render() {
    return (
      <div>
        {/* <AdminHome /> */}
        <div className="w-50 m-5">
          <div className="col">
            <h1>Announcement</h1>
          </div>
          <div className="card w-300" style={{ margin: "0px 10px 10px 10px" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="card w-300" style={{ margin: "0px 10px 10px 10px" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div className="card w-300" style={{ margin: "0px 10px 10px 10px" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        {/* <Announcements /> */}
      </div>
    );
  }
}

export default Announcements;
