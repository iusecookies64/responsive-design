import React from "react";

export default function Testimony() {
  return (
    <>
      <div className="py-5 bg-white d-flex justify-content-center align-items-center">
        <div
          className="option-card d-flex flex-column justify-content-center align-items-center align-items-md-start gap-4 p-4 border bg-success rounded"
          style={{ width: "80%" }}
        >
          <div className="option-title d-flex flex-row align-items-center fw-semibold">
            <img className="me-2 me-lg-4" src="./quote.png" alt="" />
            Testimonials
          </div>
          <div className="option-description text-center text-md-start text-black text-md-secondary">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>
          <div className="testimony-footer d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center gap-4 w-100">
            <div
              className="player p-2 p-lg-3 bg-warning rounded d-flex flex-row justify-content-evenly align-items-center gap-4"
              style={{ width: "100%", maxWidth: "578px" }}
            >
              <div className="p-1 rounded-circle bg-white">
                <img src="./play.png" alt="" />
              </div>
              <div
                className="d-flex flex-row align-items-center"
                style={{ width: "100%" }}
              >
                <div
                  className="rounded-circle bg-primary"
                  style={{ height: "12px", width: "12px" }}
                ></div>
                <div
                  className="bg-white me-2"
                  style={{ height: "2px", width: "100%", maxWidth: "468px" }}
                ></div>
                <div className="fs-5 text-primary">0:00</div>
              </div>
              <div
                className="position-relative d-flex justify-content-center align-items-center"
                style={{ width: "20%", maxHeight: "60px", maxWidth: "60px" }}
              >
                <img className="img-fluid" src="./girl.png" alt="" />
                <img
                  className="position-absolute bottom-0 start-0"
                  style={{ transform: "translateX(-50%)", height: "50%" }}
                  src="./mic.png"
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center gap-4">
              <div>
                <img style={{ height: "100px" }} src="./girl.png" alt="" />
              </div>
              <div>
                <div className="fs-2 text-primary fw-semibold">
                  Shubha Nagarajan
                </div>
                <div className="fs-4 text-danger">Classical Dancer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-info py-5 d-flex justify-content-center align-items-center">
        <div
          className="d-flex flex-column justify-content-between align-items-start gap-5"
          style={{ width: "80%" }}
        >
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <img className="img-fluid" src="./hobby-text.png" alt="" />
            </div>
            <div
              className="hobby-btn p-2 my-4 bg-primary d-flex justify-content-center align-items-center  text-white rounded fw-semibold flex-grow-0"
              style={{ width: "20%", minWidth: "100px", maxWidth: "150px" }}
            >
              Get Started
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <img style={{ width: "100%" }} src="./group.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
