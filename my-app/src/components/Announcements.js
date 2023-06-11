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
              <h5 className="card-title">Career Building Session </h5>
              <p className="card-text">
                Career building is an ongoing process that requires continuous
                learning and development to enhance skills and stay relevant in
                the ever-changing job market. It involves setting clear goals,
                seeking new opportunities, and networking to build a strong
                professional foundation for long-term success.
              </p>
            </div>
          </div>
          <div className="card w-300" style={{ margin: "0px 10px 10px 10px" }}>
            <div className="card-body">
              <h5 className="card-title">Health Check Up</h5>
              <p className="card-text">
                Regular health check-ups are essential for early detection and
                prevention of potential health issues, ensuring overall
                well-being and longevity. They provide an opportunity to assess
                one's physical and mental health, receive professional guidance,
                and make informed decisions for a healthier lifestyle.
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
