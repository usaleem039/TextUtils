import React, { useState } from "react";

export default function TextForm(props) {




  
  // STATES
  const [text, setText] = useState("");






  // FUNCTIONS
  const handleUpClick = () => {
    // console.log("UpperCase button is clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  };
  const handleLoClick = () => {
    // console.log("UpperCase button is clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  };
  const handleDownClick = () => {
    let element = document.createElement("a");
    let file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myfile.txt";
    element.click();
    props.showAlert("Downloaded the text in txt.file", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the Text", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces from the text", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };





  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "grey" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-success mx-2">
          Convert to UpperCase
        </button>
        <button onClick={handleLoClick} className="btn btn-success mx-2">
          Convert to LowerCase
        </button>
        <button onClick={handleDownClick} className="btn btn-success mx-2">
          Download text file
        </button>
        <button onClick={handleCopy} className="btn btn-success mx-2">
          Copy Text
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-success mx-2">
          Remove Extraspaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "grey" }}
      >
        <h2>Your text Summary</h2>
        <p>
        {/* method to remove blank word counting */}
          {text.length > 0 ? text.trim().split(" ").length : 0} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes needed to read this.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here."}</p>
      </div>
    </>
  );
}
