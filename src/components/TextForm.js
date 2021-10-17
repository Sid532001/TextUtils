import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    // console.log("Upercase was clicked : "+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success")
  };
  const handleLowClick = () => {
    // console.log("Upercase was clicked : "+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")
  };
  const handleClear = () => {
    // console.log("Upercase was clicked : "+text);
    // let newText=text.toLowerCase();
    setText("");
    props.showAlert("TextArea is cleared","success")
  };
  const intoTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
    props.showAlert("First letter has been Capitalized","success")
  };
  const handleOnChange = (event) => {
    // console.log("On change was called just now");
    setText(event.target.value);
  };
  // const handlespaces = () => {
  //   let newtext = text.trim();
  //   setText(newtext);

  // };
 
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied","success")
  }

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been trimmed out","success")
  }

  const [text, setText] = useState("");
  // text="new  text";   wrong way to change the state
  // setText=("Hey enter ");  //correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={intoTitleCase}>
          Chage only first character
        </button>

        {/* <button className="btn btn-primary mx-2 my-2" onClick={handlespaces}>
          Clear Spaces
        </button> */}
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Clear Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>
          <b>Your text summary</b>
        </h1>
        <p>
          {" "}
          {text.split(" ").length} <b>words</b> and {text.length}{" "}
          <b>characters</b>
        </p>
        <p>
          {" "}
          {0.008 * text.split(" ").length} <b>Minutes read</b>{" "}
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
};

export default TextForm;
