import React from "react";
import FormSmall from "./FormSmall";
import FormLarge from "./FormLarge";

export default function LargeMain() {
  return (
    <div
      className="main d-flex flex-row justify-content-evenly align-items-end"
      style={{ backgroundColor: "#F7F5F9" }}
    >
      <div
        className="d-flex flex-column justify-content-between justify-content-xl-end align-items-center px-3 fs-4 pt-4 h-full"
        style={{ maxWidth: "707px", minHeight: "578px", height: "100%" }}
      >
        <div className="d-flex flex-column align-items-center mb-0 mb-xl-5">
          <div
            className="d-flex flex-column gap-xl-2  lh-base lh-xl-lg mb-4"
            style={{ lineHeight: "30px", fontWeight: "300" }}
          >
            <div className="mb-4">
              <img className="img-fluid" src="./home-text.png" alt="" />
            </div>
            <p className="d-lg-none fs-5">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform.
            </p>
            <p className="d-none d-lg-block">
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className="d-none d-lg-block ">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <div className="d-xl-none">
            <FormSmall />
          </div>
        </div>
        <div>
          <img className="img-fluid" src="./home.png" alt="" />
        </div>
      </div>
      <div className="d-none d-xl-block">
        <FormLarge />
      </div>
    </div>
  );
}
