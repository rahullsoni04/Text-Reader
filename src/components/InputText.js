import React from "react";
import { useState } from "react";
let userText;
export default function InputText(props) {
  const [text, setText] = useState("");
  const TextBox = (event) => {
    setText(event.target.value);
    userText = text;
    // userText.style.backgroundColor='cyan';
  };
  const SetUpper = () => {
    setText(text.toUpperCase());
    props.showAlert("success", "converted to uppercase");
  };
  const SetLower = () => {
    setText(text.toLowerCase());
    props.showAlert("success", "converted to lowercase");
  };
  const ClearTextArea = () => {
    setText("");
    props.showAlert("danger", "Cleared");
  };
  const CopyText=()=>{
    let text=document.getElementById('inputText');
    navigator.clipboard.writeText(text.value);
    props.showAlert("success","Copied to clipboard")
  }
  return (
    <>
      <div className="mb-3 my-5">
        <h2>{props.header}</h2>
        <textarea
          className="form-control"
          id="inputText"
          rows="10"
          value={text}
          placeholder="Enter text here"
          onChange={TextBox}
          style={{
            backgroundColor: props.mode === "dark" ? "#1B1D36" : "white",
            color: props.mode === "light" ? "black" : "cyan",
          }}
        ></textarea>
      </div>
      <div className="row">
        <div className="col-sm-3 text-center my-2">
          <button className="btn btn-primary" disabled={text.length===0} onClick={SetUpper}>
            Convert Uppercase
          </button>
        </div>
        <div className="col-sm-3 text-center my-2">
          <button className="btn btn-primary" disabled={text.length===0} onClick={SetLower}>
            Convert Lowercase
          </button>
        </div>
        <div className="col-sm-3 text-center my-2">
          <button className="btn btn-primary" disabled={text.length===0} onClick={CopyText}>
            Copy text
          </button>
        </div>
        <div className="col-sm-3 text-center my-2">
          <button className="btn btn-primary" disabled={text.length===0} onClick={ClearTextArea}>
            Clear
          </button>
        </div>
      </div>

      <div className="container my-4">
        <h3 style={{ textAlign: "center" }}>Text Analysis</h3>
        <h4 style={{ padding: "10px 0px 20px 0px" }}>Key Factors</h4>
        <div >
          {/* <div className="left col-sm-6 ">
          </div>
          <div className="right col-sm-6 ">
        </div> */}
        {/* <p className="left col-xs-6">No. of Characters : </p>
        <p className="right col-xs-6">{text.length}</p> */}
        </div>
        

        <div className="row">
          <div className="left col-sm-4 col-xs-6">
            <p>No. of Characters : </p>
            <p>No. of Words :</p>
            <p htmlFor="avgReadingTime">Average Reading time : </p>
          </div>
          <div className="right col-sm-4 col-xs-6">
            <p>{text.length}</p>
            <p>
              {
                text.split(/\s/).filter((element) => {
                  return element.length !== 0;
                }).length
              }
            </p>
            <p id="avgReadingTime">
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
              Minutes to read
            </p>
          </div>
        </div>
        <h3>Preview</h3>
        <p className="mx-3">
          {text.length > 0 ? text : "Type something to preview...."}
        </p>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <button className="btn btn-primary">Count Frequeny</button>
          </div>
        </div>
      </div> */}
    </>
  );
}
export { userText };
