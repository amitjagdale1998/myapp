import React,{useEffect} from "react";



function UseEffect()
{
    const [data,setData]=React.useState(0);
    useEffect(()=>
    {
        console.warn("useeffect");
        let valueData={data};
        console.warn(valueData);
    })
    
    return(<div style={{backgroundColor:"yellow"}}>
        <h1>UseEffect Hook in brief</h1>
        <h3>{data}</h3>
         <button onClick={()=>setData(data+1)}>Update data</button>
    </div>)
}export default UseEffect;

