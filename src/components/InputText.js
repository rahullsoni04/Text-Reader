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
    props.showAlert("primary","converted to uppercase");
  };
  const SetLower = () => {
    setText(text.toLowerCase());
    props.showAlert("primary","converted to lowercase");
  };
  const [freq, newFreq] = useState(0);
  const FrequentWord = () => {
    let textObj = {
      word: "",
      frequency: 0,
    };
    let textVector = text.split(" ");
    for (let i = 0; i < text.split(" ").length; i++) {
      if (textVector.hasOwnProperty(textVector[i])) {
        newFreq(1);
        console.log("success");
      } else {
        newFreq(textVector.hasOwnProperty(textVector[0]));
        console.log(textVector.hasOwnProperty(textVector[0]));
        console.log(textVector);
      }
    }
  };
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
          style={{backgroundColor:(props.mode==='dark')?'#1B1D36':'white',
          color:(props.mode==='light')?'black':'cyan'}}
        ></textarea>
      </div>
      <div className="row">
        <div className="col-sm-4 text-center">
          <button className="btn btn-primary" onClick={SetUpper}>
            Convert Uppercase
          </button>
        </div>
        <div className="col-sm-4 text-center" style={{backgroundColor:(props.mode==='dark')?'#1B1D36':'white'}}>
          <button className="btn btn-primary" onClick={SetLower}>
            Convert Lowercase
          </button>
        </div>
        <div className="col-sm-4 text-center">
          <button className="btn btn-primary">
            Frequency
          </button>
        </div>
      </div>

      <div className="container my-4">
        <h3 style={{ textAlign: "center" }}>Text Analysis</h3>
        <h4 style={{ padding: "10px 0px 20px 0px" }}>Key Factors</h4>
        <div className="row">
          <div className="left col-sm-4">
            <p>No. of Characters : </p>
            <p>
              No. of Words : <br />
              (Enter space at end for accracy){" "}
            </p>
            <p htmlFor="avgReadingTime">Average Reading time : </p>
            <p>Most Frequency Word : </p>
          </div>
          <div className="right col-sm-6">
            <p>{text.length}</p>
            <p >{text.split(" ").length - 1}</p>
            <br />
            <br />
            <p id="avgReadingTime">{0.008 * (text.split(" ").length - 1)}</p>
            <p>Frequency {freq}</p>
          </div>
        </div>
        <h3>Preview</h3>
        <p className="mx-3">{text.length>0?text:"Type something to preview...."}</p>
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
