import React from "react";

const Donation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div
            className="left-box p-4 mt-5"
            style={{ backgroundColor: "#F6F1F1" }}
          >
            <form>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email ID"
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control description"
                  id="description"
                  rows="5"
                  placeholder="Enter Description"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-boxes">
            <div className="right-box" style={{ backgroundColor: "#F6F1F1" }}>
              <div className="image-container">
                <img
                  src="https://loretorainbowhomes.in/images/Program.jpg"
                  alt="Image"
                />
              </div>
              <div className="text-container">
                <div className="quote">
                  "The best way to find yourself is to lose yourself in the
                  service of others."
                </div>
                <div className="quote">
                  "No one has ever become poor by giving."
                </div>
                <div className="quote">"In giving, we receive."</div>
              </div>
            </div>
          </div>
          <div className="right-box" style={{ backgroundColor: "#F6F1F1" }}>
            <div className="image-container">
              <img
                src="https://csrbox.org/company/proj_img/1538382483Pune-Program-Launch-Balpanachi-Aastha1.1.jpeg"
                alt="Image"
              />
            </div>
            <div className="text-container">
              <div className="quote">
                "The meaning of life is to find your gift. The purpose of life
                is to give it away."
              </div>
              <div className="quote">
                "The greatest gift you can give someone is your time. Because
                when you give your time, you are giving a portion of your life
                that you will never get back."
              </div>
              <div className="quote">
                "Giving is not just about making a donation, it's about making a
                difference."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
