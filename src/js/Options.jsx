import React from "react";

export default function Options() {
  return (
    <>
      <div className="d-flex flex-column flex-xl-row  justify-content-center align-items-center gap-5 p-5 mt-5  flex-wrap">
        <div
          className="option-card d-flex flex-column justify-content-center align-items-center align-items-md-start gap-4 p-4 border rounded"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <div className="option-title d-flex flex-row align-items-center fw-semibold">
            <img className="me-2 me-lg-4" src="./people.png" alt="" />
            People
          </div>
          <div className="option-description text-center text-md-start ">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </div>
          <div className="option-btn d-flex flex-row justify-content-center align-items-center px-md-4 py-md-2 border border-primary text-primary rounded">
            Connect
          </div>
        </div>
        <div
          className="option-card d-flex flex-column justify-content-center align-items-center align-items-md-start gap-4 p-4 border rounded"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <div className="option-title d-flex flex-row align-items-center fw-semibold">
            <img className="me-2 me-lg-4" src="./location.png" alt="" />
            Place
          </div>
          <div className="option-description text-center text-md-start ">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </div>
          <div className="option-btn d-flex flex-row justify-content-center align-items-center px-md-4 py-md-2 border border-primary text-primary rounded">
            Meet Up
          </div>
        </div>
        <div
          className="option-card d-flex flex-column justify-content-center align-items-center align-items-md-start gap-4 p-4 border rounded"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <div className="option-title d-flex flex-row align-items-center fw-semibold">
            <img className="me-2 me-lg-4" src="./basket.png" alt="" />
            Product
          </div>
          <div className="option-description text-center text-md-start ">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </div>
          <div className="option-btn d-flex flex-row justify-content-center align-items-center px-md-4 py-md-2 border border-primary text-primary rounded">
            Get It
          </div>
        </div>
        <div
          className="option-card d-flex flex-column justify-content-center align-items-center align-items-md-start gap-4 p-4 border rounded"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <div className="option-title d-flex flex-row align-items-center fw-semibold">
            <img className="me-2 me-lg-4" src="./program.png" alt="" />
            Program
          </div>
          <div className="option-description text-center text-md-start ">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online. Or, you know someone who should be on
            hobbycue?
          </div>
          <div className="option-btn d-flex flex-row justify-content-center align-items-center px-md-4 py-md-2 border border-primary text-primary rounded">
            Connect
          </div>
        </div>
      </div>
      <div className="py-5 bg-info d-flex justify-content-center align-items-center">
        <div
          className="option-card d-flex flex-column justify-content-center align-items-center align-items-md-start gap-4 p-4 border bg-white rounded"
          style={{ width: "80%" }}
        >
          <div className="option-title d-flex flex-row align-items-center fw-semibold">
            <img className="me-2 me-lg-4" src="./add.png" alt="" />
            Add your own
          </div>
          <div className="option-description text-center text-md-start ">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </div>
          <div className="option-btn d-flex flex-row justify-content-center align-items-center px-md-4 py-md-2 border border-primary text-primary rounded">
            Add New
          </div>
        </div>
      </div>
    </>
  );
}
