import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState ("null");

  const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type: type
    })
      setTimeout(() => {
      setAlert(null);
    }, 1300);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled!", "success :");
      document.title ='WordData - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled!", "success :");
      document.title ='WordData - Light Mode';
        }
  }
  return (
         <>     
        {/* <BrowserRouter> */}
         <div>
         {/* <Navbar title="WordData" aboutText="About2"/> */}
              <Navbar mode={mode} toggleMode={toggleMode}  />
              <Alert alert={alert}/>   
        <div className="container my-3">
      {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm alert={alert}  showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/> } /> */}
        <TextForm alert={alert}  showAlert={showAlert} mode={mode} heading="Enter the text to analyze below"/>
        {/* <Route exact path="/about" element={<About />} /> */}
      {/* </Routes> */}
        </div>   
        </div>
     {/* </BrowserRouter> */}
         </>  
  );
}

export default App;
