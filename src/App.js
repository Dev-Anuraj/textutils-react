// import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
import TextForm from "./Components/TextForm";
import React, {useState} from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light'); //whether dark mode enabled or not?
const [alert, setAlert] = useState(null)

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

const toggleMode = ()=>{
  if(mode === "light"){
    setMode ('dark');
    document.body.style.backgroundColor = "black";
    showAlert("Dark Mode has been Enabled", "success");
    Document.title = "TextUtils - Dark Mode";
    // setInterval(()=>{
    //   Document.title = 'TextUtils - Dark Mode';
    // }, 2000);
    // setInterval(()=>{
    //   Document.title = 'TextUtils - Dark Mode Enabled';
    // }, 2500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = "white";
    showAlert("Light Mode has been Enabled", "success");
    Document.title = 'TextUtils - Light Mode';
  }

}
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/"> */}
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}/>
          {/* </Route>
        </switch>
        <About/> */}
      </div>
        {/* </Router> */}
    </>
  );
}

export default App;
