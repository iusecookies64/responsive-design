import React, { useRef } from "react";

export default function NavBar() {
  const dropdown = useRef();
  return (
    <div className="d-flex flex-row justify-content-around align-items-centershadow nav-bar">
      <div className="d-flex flex-row align-items-center gap-4 d-lg-hidden py-2">
        <div>
          <img
            className="d-none d-xl-block"
            src="./logo1.png"
            style={{ height: "60px" }}
          ></img>
          <img
            className="d-block d-xl-none"
            src="./logo1.png"
            style={{ height: "32px" }}
          ></img>
        </div>
        <div
          className="d-xl-flex d-none flex-row rounded"
          style={{ height: "40px" }}
        >
          <input
            className="form-control rounded-start custom-input"
            style={{
              backgroundColor: "#EBEDF0",
              color: "#939ca3",
              fontSize: "12px",
              width: "300px",
            }}
            placeholder="Search here..."
          ></input>
          <div
            className="d-flex justify-content-center  align-items-center rounded-end text-white"
            style={{
              height: "40px",
              width: "40px",
              backgroundColor: "#8064A2",
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-row gap-4 h-100 align-items-center position-relative custom-element"
        style={{ minHeight: "100%" }}
      >
        {/* explore section start */}
        <div
          className="d-md-flex d-none flex-row justify-content-between align-items-center"
          style={{
            fontSize: "14px",
            height: "100%",
            width: "107px",
            cursor: "pointer",
          }}
          onMouseEnter={() => {
            dropdown.current.classList.remove("d-none");
          }}
          onMouseLeave={() => {
            dropdown.current.classList.add("d-none");
          }}
        >
          <div
            className="d-flex flex-row align-items-center "
            style={{ gap: "4px" }}
          >
            <div>
              <img src="./explore.png" alt="" />
            </div>
            <div>Explore</div>
          </div>
          <div>
            <i
              className="fa-solid fa-chevron-down"
              style={{ color: "#939ca3" }}
            ></i>
          </div>
          {/* dropdown list start */}
          <div
            ref={dropdown}
            className="position-absolute d-hidden top-100 bg-white border shadow-sm "
            style={{ color: "#6D747A", width: "220px", zIndex: "10" }}
          >
            <div className="p-2 border-bottom ">People - Community</div>
            <div className="p-2 border-bottom ">People - Venues</div>
            <div className="p-2 border-bottom ">Programs - Events</div>
            <div className="p-2 border-bottom ">Products - Store</div>
            <div className="p-2 border-bottom ">Blogs</div>
          </div>
          {/* dropdown list end */}
        </div>
        {/* exlore section end */}
        {/* hobbies section start */}
        <div
          className="d-md-flex d-none flex-row justify-content-between align-items-center"
          style={{
            fontSize: "14px",
            height: "40px",
            width: "107px",
            cursor: "pointer",
          }}
        >
          <div
            className="d-flex flex-row align-items-center "
            style={{ gap: "4px" }}
          >
            <div>
              <img src="./hobbies.png" alt="" />
            </div>
            <div>Hobbies</div>
          </div>
          <div>
            <i
              className="fa-solid fa-chevron-down"
              style={{ color: "#939ca3" }}
            ></i>
          </div>
        </div>
        {/* hobbies section end */}
        <div
          className="d-flex d-xl-none flex-row align-items-center "
          style={{ cursor: "pointer" }}
        >
          <img src="./search.png" alt="" />
        </div>
        <div
          className="d-xl-flex d-none flex-row align-items-center "
          style={{ cursor: "pointer" }}
        >
          <img src="./bookmark.png" alt="" />
        </div>
        <div
          className="d-flex flex-row align-items-center "
          style={{ cursor: "pointer" }}
        >
          <img src="./notifications.png" alt="" />
        </div>
        <div
          className="d-xl-flex d-none flex-row align-items-center "
          style={{ cursor: "pointer" }}
        >
          <img src="./cart.png" alt="" />
        </div>
        <div
          className="d-flex d-xl-none flex-row align-items-center "
          style={{ cursor: "pointer" }}
        >
          <img src="./menu.png" alt="" />
        </div>
        <button
          className="d-xl-block px-4 d-none btn btn-outline-primary custom-btn"
          style={{
            "--bs-btn-color": "#8064A2",
            "--bs-btn-border-color": "#8064A2",
            height: "40px",
            width: "112px",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
