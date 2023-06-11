import React, { useState } from "react";

function QnAForm() {
  const [physicalHealth, setPhysicalHealth] = useState("");
  const [mentalHealth, setMentalHealth] = useState("");
  const [empStuStatus, setEmpStuStatus] = useState("");
  const [message, setMessage] = useState("");

  const handlePhysicalHealthChange = (event) => {
    setPhysicalHealth(event.target.value);
  };

  const handleMentalHealthChange = (event) => {
    setMentalHealth(event.target.value);
  };

  const handleEmpStuStatusChange = (event) => {
    setEmpStuStatus(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form submission here
    console.log("Form submitted!");
  };

  return (
    <div className="cont1 mt-2">
      <p className="display-6 ms-4">How are you doing ? </p>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label> How is your Physical Health ? </label> <br />
          <input
            type="radio"
            name="PhysicalHealth"
            value="1"
            checked={physicalHealth === "1"}
            onChange={handlePhysicalHealthChange}
          />
          Very Bad
          <br />
          <input
            type="radio"
            name="PhysicalHealth"
            value="2"
            checked={physicalHealth === "2"}
            onChange={handlePhysicalHealthChange}
          />
          Bad
          <br />
          <input
            type="radio"
            name="PhysicalHealth"
            value="3"
            checked={physicalHealth === "3"}
            onChange={handlePhysicalHealthChange}
          />
          Good <br />
          <input
            type="radio"
            name="PhysicalHealth"
            value="4"
            checked={physicalHealth === "4"}
            onChange={handlePhysicalHealthChange}
          />
          Very Good <br />
          <input
            type="radio"
            name="PhysicalHealth"
            value="5"
            checked={physicalHealth === "5"}
            onChange={handlePhysicalHealthChange}
          />
          Excellent <br />
          <br />
        </div>{" "}
        <div className="question">
          <label> How is your Mental Health ? </label> <br />
          <input
            type="radio"
            name="MentalHealth"
            value="1"
            checked={mentalHealth === "1"}
            onChange={handleMentalHealthChange}
          />
          Very Bad <br />
          <input
            type="radio"
            name="MentalHealth"
            value="2"
            checked={mentalHealth === "2"}
            onChange={handleMentalHealthChange}
          />
          Bad <br />
          <input
            type="radio"
            name="MentalHealth"
            value="3"
            checked={mentalHealth === "3"}
            onChange={handleMentalHealthChange}
          />
          Good <br />
          <input
            type="radio"
            name="MentalHealth"
            value="4"
            checked={mentalHealth === "4"}
            onChange={handleMentalHealthChange}
          />
          Very Good <br />
          <input
            type="radio"
            name="MentalHealth"
            value="5"
            checked={mentalHealth === "5"}
            onChange={handleMentalHealthChange}
          />
          Excellent <br />
          <br />
        </div>{" "}
        <div className="question">
          <label> How is your job or student life going ? </label>{" "}
          <input
            type="radio"
            name="EmpStuStatus"
            value="1"
            checked={empStuStatus === "1"}
            onChange={handleEmpStuStatusChange}
          />
          Very Bad{" "}
          <input
            type="radio"
            name="EmpStuStatus"
            value="2"
            checked={empStuStatus === "2"}
            onChange={handleEmpStuStatusChange}
          />
          Bad <br />
          <input
            type="radio"
            name="EmpStuStatus"
            value="3"
            checked={empStuStatus === "3"}
            onChange={handleEmpStuStatusChange}
          />
          Good <br />
          <input
            type="radio"
            name="EmpStuStatus"
            value="4"
            checked={empStuStatus === "4"}
            onChange={handleEmpStuStatusChange}
          />
          Very Good <br />
          <input
            type="radio"
            name="EmpStuStatus"
            value="5"
            checked={empStuStatus === "5"}
            onChange={handleEmpStuStatusChange}
          />
          Excellent <br />
        </div>{" "}
        <div className="question">
          <label htmlFor="description"> Want to add any message ? </label>{" "}
          <br />
          <textarea
            id="description"
            name="description"
            rows="5"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>{" "}
        </div>{" "}
        <div>
          <button className="btn-success btn mt-2">Submit</button>
        </div>{" "}
      </form>{" "}
    </div>
  );
}

export default QnAForm;
