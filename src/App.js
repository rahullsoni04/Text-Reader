import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/InputText.js";
// import analysis from './components/Analyzer.js'

// import About from './components/About'
import About from "./components/About.js";

import Alert from "./components/Alert.js";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useState } from "react";

//importing router dom from https://v5.reactrouter.com/web/guides/quick-start
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, choiceMode] = useState("light");
  const [modeBtn, choiceModeBtn] = useState("Dark Mode");
  const [alert, setalert] = useState(null);

  const showAlert = (type, message) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const UserMode = (cls) => {
    console.log(cls);
    if(cls!=null){
      document.body.classList="bg-"+cls;
    }
    else if (mode === "dark") {
      choiceMode("light");
      choiceModeBtn("Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("success", "light mode enabled");
      setTimeout(() => {
        document.title = "Text Utils";
      }, 2000);
      setTimeout(() => {
        document.title = "Thank You";
      }, 1500);
    } else if (mode === "light"){
      choiceMode("dark");
      choiceModeBtn("Light Mode");
      document.body.style.backgroundColor = "#1B1D36";
      document.body.style.color = "cyan";
      showAlert("success", "Dark mode enabled");
      setTimeout(() => {
        document.title = "Text Utils";
      }, 3000);
      setTimeout(() => {
        document.title = "Thank You";
      }, 1000);
    }
  };

  return (
    <>
      <Router>
        <Navbar
          tittle="Text Utils"
          mode={mode}
          userMode={UserMode}
          modeBtn={modeBtn}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={
              <TextArea
                header="Enter Text below"
                alert={alert}
                mode={mode}
                showAlert={showAlert}
              />}
            />
            <Route path="/about" element={<About mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
