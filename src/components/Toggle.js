import React from "react";


const Toggle=()=>
{
    const[status,setStatus]=React.useState(true);
    return(<div style={{backgroundColor:"gray"}}>
        <h1>Toggle</h1>
        {
            status?<h1>this is toggle code</h1>:null
        }
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>
        <button onClick={()=>setStatus(!status)}>Toggle</button>

    </div>)
}
export default Toggle;