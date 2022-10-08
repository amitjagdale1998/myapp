import React from "react";
import { useState } from "react";

function UseState()
{
    const [data,setData]=useState("amit");
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h1>This is use state Program of Hooks</h1>
            <h3>{data}</h3>
            <button onClick={()=>setData("sundar pichahi")}>increse</button>
        </div>
    )

}export default UseState;

