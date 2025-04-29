import React, { useState } from 'react'

export default function TextForm(props) {
   const[text,setText] = useState("");

                const handleUpClick = () =>{
                    console.log("Uppercase was Clicked");
                    let newText = text.toUpperCase();
                    setText(newText);
                }
                
                const handleOnChange = (event) =>{
                    console.log("On Change");
                    setText(event.target.value);
                }

                const handleLoClick = () =>{
                    console.log("LowerCase was Clicked");
                    let newText = text.toLowerCase();
                    setText(newText);
                }

                const handleExtraSpace = () =>{
                    console.log("Remove ExtraSpace Clicked!")
                   let newText = text.split(/[ ]+/);
                   setText(newText.join(" "));

                }

                const handleCopy = () =>{
                    console.log("copy was clicked!");
                    var text = document.getElementById("myBox");
                    text.select();
                    text.setSelectionRange(0, 9999);
                    navigator.clipboard.writeText(text.value)
                    props.showAlert("Copied to Clipborad!", "success :");
                }
                
                const handleClear = () =>{
                    console.log("Clear was Clicked!");
                    setText("");
                    props.showAlert("Text Cleared!!", "danger :");
                    // let newText = '';
                    // setText(newText);
                }
  return (
    <>
         <div className="mb-3" style={{color : props.mode=== 'dark'?'#d4dfe1' : 'black'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="8"></textarea>
         </div>
         <div className="container">
                <button type="button" onClick={handleUpClick} className="btn btn-primary mx-1 my-2">Convert to Uppercase</button>
                <button type="button" onClick={handleLoClick} className="btn btn-primary mx-1 my-2">Convert to Lowercase</button>
                <button type="button" onClick={handleExtraSpace} className="btn btn-primary mx-1 my-2">Remove Extra Spaces</button>
                <button type="button" onClick={handleCopy} className="btn btn-primary mx-1 my-2">Copy Text</button>
                <button type="button" onClick={handleClear} className="btn btn-primary mx-1 my-2">Clear Text</button>
        </div>
        <div className="container my-3" style={{color : props.mode=== 'dark'?'#d4dfe1' : 'black'}}>
            <h2>Your Text Summary</h2>
            {/* <p>{text.split(" ").filter(word => word !== "").length} Words and {text.length} Characters</p> */}
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{text.split(/[.!?]/).map(w => w.trim()).filter(s => s.length > 0).length} Sentences</p>
            <p>{0.008 * text.split(" ").filter(t => t.length > 0).length} Minutes Read</p>
            <h2 className="preview my-3">Preview Text</h2>
            <p>{text.length>0 ? text:"Enter Something in the textbox above to preview here!"}</p>
        </div>
    </>
  );
}



