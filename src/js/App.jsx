import { useState } from "react";
import NavBar from "./NavBar";
import LargeMain from "./LargeMain";
import Options from "./Options";
import Testimony from "./Testimony";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <NavBar />
      <LargeMain />
      <Options />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
