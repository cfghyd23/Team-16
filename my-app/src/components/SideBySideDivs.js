import React from "react";
import Announcements from "./Announcements";
import AdminHome from "./AdminHome";
import Issues from "./Issues";

class SideBySideDivs extends React.Component {
  render() {
    const div1Style = {
      backgroundColor: "white",
      height: "90vh",
      width: "50%",
      float: "left",
    };

    const div2Style = {
      backgroundColor: "white",
      height: "90vh",
      width: "50%",
      float: "left",
    };

    return (
      <div>
        <AdminHome />
        <div style={div1Style}>
          <Issues />
        </div>
        <div style={div1Style}>
          <Announcements />
        </div>
      </div>
    );
  }
}

export default SideBySideDivs;
