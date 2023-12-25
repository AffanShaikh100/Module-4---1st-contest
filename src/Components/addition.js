import React from "react";

const Addition = ({setBool,inp1,inp2,setNum}) =>{


    function checkedvalues(){
        if(inp1 && inp2){
            if(isNaN(inp1)&&isNaN(inp2)){
                setBool(false)
                return setNum("Please input number in Num 1 & Num 2")
            }
            else if(isNaN(inp1)){
                setBool(false)
                return setNum("Num 1 is not text")
    
            }
            else if(isNaN(inp2)){
                setBool(false)
                return setNum("Num 2 is not text")
            }
             setBool(true)
             let value1 = parseInt(inp1);
             let value2 = parseInt(inp2);

             setNum(value1+value2)
        }
        else{
            if(!inp1 && !inp2){
               setBool(false)
               setNum("Num 1 & Num 2 cannot be found")
            }
            else if(!inp2){
                setBool(false)
                setNum("Num 2 cannot be found");
            }
            
            else if(!inp1){
                setBool(false)
                setNum("Num 1 cannot be found");
            }
        
        }

        
    }

    return(
        <div className="buttondiv">
           <button onClick={checkedvalues}>+</button>
        </div>
    )
}

export default Addition