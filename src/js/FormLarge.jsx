import { useState } from "react";

export default function FormLarge() {
  const [signin, setSignin] = useState(true);
  const activeStyle = {
    cursor: "pointer",
    color: "#8064A2",
    borderBottom: "2px solid #8064A2",
  };
  const nonActiveStyle = { cursor: "pointer" };
  return (
    <div
      className="large-form d-flex flex-column gap-5"
      style={{ fontWeight: 600 }}
    >
      <div
        className="d-flex flex-row gap-4 fs-2"
        style={{ fontWeight: "600", color: "#939CA3" }}
      >
        <div
          className="cursor-pointer"
          style={signin ? activeStyle : nonActiveStyle}
          onClick={() => setSignin(true)}
        >
          Sign In
        </div>
        <div
          className="cursor-pointer"
          style={!signin ? activeStyle : nonActiveStyle}
          onClick={() => setSignin(false)}
        >
          Join In
        </div>
      </div>
      {signin ? (
        <div className="d-flex flex-column gap-3">
          <div
            className=" d-flex w-full border border-dark rounded justify-content-center align-items-center position-relative "
            style={{ height: "40px" }}
          >
            <div
              className="position-absolute top-0 start-0 d-flex flex-row justify-content-center  align-items-center ps-3"
              style={{ height: "100%" }}
            >
              <img src="./google.png" alt="" />
            </div>
            Continue With Google
          </div>
          <div
            className=" d-flex w-full border border-dark rounded justify-content-center align-items-center position-relative "
            style={{ height: "40px" }}
          >
            <div
              className="position-absolute top-0 start-0 d-flex flex-row justify-content-center  align-items-center ps-3"
              style={{ height: "100%" }}
            >
              <img src="./facebook.png" alt="" />
            </div>
            Continue With Facebook
          </div>
          <div
            className="d-flex flex-row w-full justify-content-center  align-items-center"
            style={{ height: "40px" }}
          >
            <div
              className="min-w-full d-block"
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#939CA3",
              }}
            ></div>
            <div
              className="text-center "
              style={{ width: "100%", fontSize: "12px" }}
            >
              Or connect with
            </div>
            <div
              className="w-full"
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#939CA3",
              }}
            ></div>
          </div>
          <input
            className="custom-input border-0 form-control  rounded flex-column w-full"
            style={{ height: "40px", fontSize: "12px" }}
            placeholder="Email"
          ></input>
          <div className="position-relative">
            <div
              className="position-absolute top-0 end-0 d-flex flex-row justify-content-center  align-items-center pe-3"
              style={{ height: "100%" }}
            >
              <img src="./password.png" alt="" />
            </div>
            <input
              className="custom-input border-0 form-control  rounded flex-column w-full"
              style={{ height: "40px", fontSize: "12px" }}
              placeholder="Password"
            ></input>
          </div>
          <div
            className="d-flex flex-row w-full justify-content-between align-items-center fw-normal "
            style={{ height: "40px", fontSize: "12px" }}
          >
            <div className="d-flex flex-row align-items-center gap-2 fw-normal">
              <div
                className="border border-dark"
                style={{ height: "16px", width: "16px" }}
              ></div>
              <div>Remember Me</div>
            </div>
            <div className="d-flex flex-row align-items-center gap-2 fw-normal">
              <div>
                <img src="./lock.png"></img>
              </div>
              <div>Forgot Password?</div>
            </div>
          </div>
          <div
            className="d-flex w-full border border-dark rounded justify-content-center align-items-center"
            style={{ height: "40px" }}
          >
            Continue
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          <div
            className=" d-flex w-full border border-dark rounded justify-content-center align-items-center position-relative "
            style={{ height: "40px" }}
          >
            <div
              className="position-absolute top-0 start-0 d-flex flex-row justify-content-center  align-items-center ps-3"
              style={{ height: "100%" }}
            >
              <img src="./google.png" alt="" />
            </div>
            Continue With Google
          </div>
          <div
            className=" d-flex w-full border border-dark rounded justify-content-center align-items-center position-relative "
            style={{ height: "40px" }}
          >
            <div
              className="position-absolute top-0 start-0 d-flex flex-row justify-content-center  align-items-center ps-3"
              style={{ height: "100%" }}
            >
              <img src="./facebook.png" alt="" />
            </div>
            Continue With Facebook
          </div>
          <div
            className="d-flex flex-row w-full justify-content-center  align-items-center"
            style={{ height: "40px" }}
          >
            <div
              className="min-w-full d-block"
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#939CA3",
              }}
            ></div>
            <div
              className="text-center "
              style={{ width: "100%", fontSize: "12px" }}
            >
              Or connect with
            </div>
            <div
              className="w-full"
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#939CA3",
              }}
            ></div>
          </div>
          <input
            className="custom-input border-0 form-control  rounded flex-column w-full"
            style={{ height: "40px", fontSize: "12px" }}
            placeholder="Email"
          ></input>
          <div className="position-relative">
            <div
              className="position-absolute top-0 end-0 d-flex flex-row justify-content-center  align-items-center pe-3"
              style={{ height: "40px" }}
            >
              <img src="./password.png" alt="" />
            </div>
            <input
              className="custom-input border-0 form-control  rounded flex-column w-full"
              style={{ height: "40px", fontSize: "12px" }}
              placeholder="Password"
            ></input>
            <div className="d-flex flex-row justify-content-between align-items-center mt-2">
              <div className="d-flex flex-row">
                <div
                  className="bg-white"
                  style={{ height: "4px", width: "60px", marginRight: "2px" }}
                ></div>
                <div
                  className="bg-white"
                  style={{ height: "4px", width: "60px", marginRight: "2px" }}
                ></div>
                <div
                  className="bg-white"
                  style={{ height: "4px", width: "60px" }}
                ></div>
              </div>
              <div className="fs-6 text-secondary ">Password Strength</div>
            </div>
          </div>
          <div>
            <div
              className="d-flex flex-row w-full justify-content-center align-items-center fw-normal fs-5 text-secondary fw-medium"
              style={{ height: "40px" }}
            >
              By continuing, you agree to our
              <span className="text-black mx-1">Terms of Service</span> and{" "}
              <span className="text-black mx-1">Privacy Policy.</span>
            </div>
            <div
              className="d-flex w-full rounded justify-content-center align-items-center bg-primary text-white"
              style={{ height: "40px" }}
            >
              Agree And Continue
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
