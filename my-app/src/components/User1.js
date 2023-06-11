import React from "react";
import Announcements from "./Announcements";
import User from "./User";
import Issues from "./Issues";
import QnAForm from "./QnAForm";

class User1 extends React.Component {
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
        <User />
        <div style={div1Style}>
          <Announcements />
        </div>
        <div style={div1Style}>
          <QnAForm />
        </div>
      </div>
    );
  }
}

export default User1;
