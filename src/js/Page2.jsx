import React from "react";
import NavBar2 from "./NavBar2";

export default function Page2() {
  function toggleImage(e) {
    const imgEls = e.target.querySelectorAll("img");
    imgEls[0].classList.toggle("d-none");
    imgEls[1].classList.toggle("d-none");
  }
  return (
    <div className="">
      <NavBar2 />
      <div className="pg2 d-flex justify-content-center align-items-start pt-4">
        <div
          className="d-flex flex-column align-items-center py-5 bg-white rounded gap-4"
          style={{ width: "60%" }}
        >
          <div className="d-flex flex-row align-items-center gap-3">
            <img src="./add.png" alt="" />
            <div className="fs-xl fw-semibold ">Add Your Listing</div>
          </div>
          <div className="d-flex flex-row flex-wrap justify-content-evenly align-items-center">
            <div
              className="pg2-card card-purple d-flex flex-column rounded p-4 mb-5"
              style={{ width: "40%" }}
              onMouseEnter={toggleImage}
              onMouseLeave={toggleImage}
            >
              <div className="d-flex flex-row align-items-center gap-3 mb-4">
                <img style={{ height: "40px" }} src="./people.png" alt="" />
                <img
                  className="d-none"
                  style={{ height: "40px" }}
                  src="./group-white.png"
                  alt=""
                />
                <div className="fs-1 fw-semibold ">Poeple</div>
              </div>
              <div>
                An Individual or Organization. Teacher, Coach, Professional or
                Online Seller. Company, Business or Association.
              </div>
            </div>
            <div
              className="pg2-card card-green d-flex flex-column rounded p-4 mb-5"
              style={{ width: "40%" }}
              onMouseEnter={toggleImage}
              onMouseLeave={toggleImage}
            >
              <div className="d-flex flex-row align-items-center gap-3 mb-4">
                <img style={{ height: "40px" }} src="./location.png" alt="" />
                <img
                  className="d-none"
                  style={{ height: "40px" }}
                  src="./location-white.png"
                  alt=""
                />
                <div className="fs-1 fw-semibold ">Place</div>
              </div>
              <div>
                An Address. Classroom, Shop, Performance or Event Venue, Sports
                Arena, Play Area, Studio, School or Campus.
              </div>
            </div>
            <div
              className="pg2-card card-red d-flex flex-column rounded p-4"
              style={{ width: "40%" }}
              onMouseEnter={toggleImage}
              onMouseLeave={toggleImage}
            >
              <div className="d-flex flex-row align-items-center gap-3 mb-4">
                <img style={{ height: "40px" }} src="./bskt.png" alt="" />
                <img
                  className="d-none"
                  style={{ height: "40px" }}
                  src="./basket-white.png"
                  alt=""
                />
                <div className="fs-1 fw-semibold ">Product</div>
              </div>
              <div>
                An Individual or Organization. Teacher, Coach, Professional or
                Online Seller. Company, Business or Association.
              </div>
            </div>
            <div
              className="pg2-card card-blue d-flex flex-column rounded p-4"
              style={{ width: "40%" }}
              onMouseEnter={toggleImage}
              onMouseLeave={toggleImage}
            >
              <div className="d-flex flex-row align-items-center gap-3 mb-4">
                <img style={{ height: "40px" }} src="./program.png" alt="" />
                <img
                  className="d-none"
                  style={{ height: "40px" }}
                  src="./program-white.png"
                  alt=""
                />
                <div className="fs-1 fw-semibold ">Program</div>
              </div>
              <div>
                An Event with Venue and Date. Meetup, Workshop or Webinar.
                Exhibition, Performance or Competition.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
