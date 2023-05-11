import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
      }
      const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
      }
      const handleClearClick = () => {
        let newText = (" ");
        setText(newText);
        props.showAlert("Text has been Cleared", "success");
      };
      const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
      }

      const handleCopy =() =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
      }

      const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been Removed, Successfully!", "success");
}

    const [text, setText] = useState(" ");
    // text = "new text"; // wrong way to change the state
    // setText ("new text"); // correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>{text.split(" ").length}</b> Words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}</b> Minutes Read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0? text:"Enter in above box for preview"}</p>
      </div>
    </>
  );
}
