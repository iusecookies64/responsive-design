import { useState } from "react";
import NavBar from "./NavBar";
import LargeMain from "./LargeMain";
import Options from "./Options";
import Testimony from "./Testimony";
import Footer from "./Footer";

function App() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div
        className="scroll-top position-fixed top-0 start-0 d-flex justify-content-center align-items-center rounded-circle shadow border"
        style={{
          height: "32px",
          width: "32px",
          transform: "translate(50%, 50%)",
          cursor: "pointer",
        }}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </div>
      <NavBar />
      <LargeMain />
      <Options />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
