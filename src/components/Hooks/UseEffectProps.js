import React ,{useEffect}from "react";
//import UseEffect1 from "./UseEffect1";

function UseEffectProps(props)
{
    useEffect(()=>
    {
      console.log("props.data updates only")
    },[props.data])
    useEffect(()=>
    {
     console.log("props.count update only")
    },[props.count])
    return(
        <div style={{backgroundColor:"papayawhip"}}>
            <h1>UseEffect with Props</h1>
         <h3>Count props:{props.count}</h3>
         <h3>Data Props:{props.data}</h3>
        </div>
    )
}export default UseEffectProps;