import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer d-flex flex-column flex-lg-row justify-content-around align-items-start gap-5 gap-lg-0 p-4 p-lg-5">
        <div style={{ width: "100%" }}>
          <div
            className="test-black fw-semibold mb-3 d-flex flex-row justify-content-between align-items-center"
            style={{ width: "100%" }}
          >
            Hobbycue
            <i className="fa-solid fa-chevron-up d-lg-none"></i>
          </div>
          <div className="links mb-2">About Us</div>
          <div className="links mb-2">Our Services</div>
          <div className="links mb-2">Work with Us</div>
          <div className="links mb-2">FAQ</div>
          <div className="links mb-2">Contact Us</div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className="test-black fw-semibold mb-3 d-flex flex-row justify-content-between align-items-center"
            style={{ width: "100%" }}
          >
            How Do I<i className="fa-solid fa-chevron-up d-lg-none"></i>
          </div>
          <div className="links mb-2">Sign Up</div>
          <div className="links mb-2">Add a Listing</div>
          <div className="links mb-2">Claim Listing</div>
          <div className="links mb-2">Post a Query</div>
          <div className="links mb-2">Add a Blog Post</div>
          <div className="links mb-2">Other Queries</div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className="test-black fw-semibold mb-3 d-flex flex-row justify-content-between align-items-center"
            style={{ width: "100%" }}
          >
            Quick Links
            <i className="fa-solid fa-chevron-up d-lg-none"></i>
          </div>
          <div className="links mb-2">Listings</div>
          <div className="links mb-2">Blog Posts</div>
          <div className="links mb-2">Shop / Store</div>
          <div className="links mb-2">Community</div>
        </div>
        <div
          className="d-flex flex-column justify-content-between gap-5"
          style={{ width: "100%" }}
        >
          <div>
            <div className="test-black fw-semibold mb-3">Social Media</div>
            <div>
              <img className="img-fluid" src="./socials.png" alt="" />
            </div>
          </div>
          <div>
            <div className="test-black fw-semibold mb-3">Invite Friends</div>
            <div
              className="d-flex flex-row rounded overflow-hidden border border-primary"
              style={{ height: "40px", width: "100%", maxWidth: "578px" }}
            >
              <input
                className="form-control custom-input flex-grow"
                style={{
                  color: "#939ca3",
                  fontSize: "12px",
                  width: "100%",
                  borderRadius: "0%",
                }}
                placeholder="Email Id"
              ></input>
              <div
                className="d-flex justify-content-center  align-items-center rounded-end text-white p-2 fs-5 fw-semibold "
                style={{
                  backgroundColor: "#8064A2",
                }}
              >
                Invite
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltd d-flex justify-content-center align-items-center bg-warning py-3 fw-medium">
        © Purple Cues Private Limited
      </div>
    </div>
  );
}
