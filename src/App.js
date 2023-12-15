import React from "react";
import Input from "./Components/Inputs";
import Addition from "./Components/Addition";

import { useState } from "react";
import Output from "./Components/Output";
import Subtraction from "./Components/Substract";
import Multiply from "./Components/Multiplysd"
import Divide from "./Components/Divide";

const App = () =>{

    let [inp1,setInp1] = useState("")
    let [inp2,setInp2] = useState("")

    let [nums,setNum] = useState("")

    let [bool,setBool] = useState(false)

    return(
        <div className="calci">
            <h1>React Calculator</h1>

            <Input setInp1={setInp1} setInp2={setInp2}/>

            <div className="calci2">
              <Addition setBool={setBool} inp1={inp1} inp2={inp2} setNum={setNum}/>
              <Subtraction setBool={setBool} inp1={inp1} inp2={inp2} setNum={setNum}/>
              <Multiply setBool={setBool} inp1={inp1} inp2={inp2} setNum={setNum}/>
              <Divide setBool={setBool} inp1={inp1} inp2={inp2} setNum={setNum}/>
            </div>
            
            <Output nums={nums} bool={bool}/>
        
        </div>
    )
}

export default App