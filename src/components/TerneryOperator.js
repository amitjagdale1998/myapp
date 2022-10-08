import React from "react";

function TerneryOperator()
{
    const [abc,setAbc]=React.useState(true);
    return(
        <div style={{backgroundColor:"skyblue"}}>
        <h1>USe ternery operators</h1>
        {
          abc?<h3>this is true</h3>:<h3>this is false</h3>  
        }
        <button onClick={()=>setAbc(!abc)}>click</button>
        </div>
    )
}export default TerneryOperator;
