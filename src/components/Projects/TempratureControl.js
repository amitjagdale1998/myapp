import React from 'react'
import './TempratureControl.css'

function TempratureControl()
{
    const[count,setCount]=React.useState(0);
    
   return(
    <div  className='temp' align="center">
        <h1>TempratureControl Project1</h1>
        <div id="circle">
          <h1>circle</h1>
          <h1>{count}</h1>

        </div>
        <button onClick={()=>setCount(count+1)}>increse</button>
        <button onClick={()=>setCount(count-1)} >decrease</button>
    </div>
   )   
}
export default TempratureControl;