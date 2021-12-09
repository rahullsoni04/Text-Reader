import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/InputText.js";
// import analysis from './components/Analyzer.js'
// import About from './components/About'
import React, { useState } from "react";

function App() {
  const [mode, choiceMode] = useState("light");
  const [modeBtn,choiceModeBtn]=useState("Dark Mode");

  const UserMode = () => {
    if (mode === "dark") {
      choiceMode("light");
      choiceModeBtn('Dark Mode');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      console.log(modeBtn);
    } else {
      choiceMode("dark");
      choiceModeBtn('Light Mode');
      document.body.style.backgroundColor='#1B1D36';
      document.body.style.color='cyan';
    }
  };
  return (
    <>
      <Navbar tittle="Text Reader" mode={mode} userMode={UserMode} modeBtn={modeBtn} />
      <div className="container">
        <TextArea header="Enter Text below" mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
