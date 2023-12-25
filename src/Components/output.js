import React from "react";
import { useState,useEffect } from "react";


const Output = ({nums,bool}) =>{

    return(
        <div className="answer">
         
            {
               bool ? <h3 className="remark">Success! <br></br><p className="">Results : {nums}</p></h3> : <h3 className="remarkf">Error <br></br> <p>{nums}</p></h3>
            }
        </div>
    )
}

export default Output