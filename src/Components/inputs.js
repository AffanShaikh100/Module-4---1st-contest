import React from "react";

const Input =({setInp1, setInp2})=> {


    return(
        <div className="inputdiv">

            <input onChange={(e)=>setInp1(e.target.value)}  type="text" placeholder="Num 1"/>

            <input onChange={(e)=>setInp2(e.target.value)} type="text" placeholder="Num 2"/>

        </div>
    )
}

export default Input