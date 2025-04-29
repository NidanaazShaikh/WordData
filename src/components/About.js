// import React, { useState } from 'react'

export default function About(props) {

  // const[myStyle, setMyStyle] = useState({
  //   color : 'black',
  //   backgroundColor : 'white'
  // });
  // const [btntext,setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle =()=>{
  //   if(myStyle.color === `white`){
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor : 'white',
  //       border : '2px solid white'
  //   })
  //     setBtnText("Enable Dark Mode");
  //   }
  //   else{
  //     setMyStyle({
  //       color : 'white',
  //       backgroundColor : 'black'
  //     })
  //   setBtnText("Enable Light Mode");
  //   }
  // }
let myStyle ={
  color: props.mode === 'light' ? 'black' : 'white',
  backgroundColor: props.mode === 'light' ? 'white' : 'rgb(36 74 104)',
  border: '1px solid',
  borderColor: props.mode === 'light' ? 'grey' : 'white',
}

  return (
    <div className="container mp-2" style={{backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1 className='my-2'>About Us</h1>
          <div className="accordion" id="accordionExample">
              <div className="accordion-item" >
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                  <strong>Abot WordData</strong>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                  wordData, also known as TextUtils, is a tool used to manipulate and transform text in various ways. It allows users to perform operations like converting text to uppercase/lowercase, removing extra spaces, or counting words and characters. It's helpful for quick and efficient text formatting or analysis.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                  <strong>Free To Use</strong>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                  wordData (TextUtils) is completely free to use, offering all its text manipulation features without any cost.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                  <strong>Browser Compatible</strong>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                  wordData (TextUtils) is fully browser-compatible, meaning you can access and use it directly from any modern web browser without needing to install anything. It's designed for seamless performance across devices and platforms.
                  </div>
                </div>
              </div>
        </div>
        {/* <div className="conatainer my-3">
        <button onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>
        </div> */}
  </div>
  )
}
