import React,{useState,useEffect} from "react";
import UseEffectProps from "./UseEffectProps";
function UseEffect1()
{
    const[data,setData]=useState(1);
    const[count,setCount]=useState(10);
    useEffect(()=>
    {
        console.log("data:"+data);

    },[data]);
    useEffect(()=>
    {
        console.log("count:"+count);
    })
    return(
        <div style={{backgroundColor:"gray"}}>
            <h1>useEffect Part 2</h1>
            <h2>UseEffect with specific state and props</h2>
            <h3>data:{data}</h3>
            <h3>count:{count}</h3>
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <UseEffectProps data={data} count={count}/>

        </div>
    )
}export default UseEffect1;