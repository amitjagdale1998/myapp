import React ,{useEffect} from "react"

function UseEffectIQ()
{
    const[state,setState]=React.useState("amit");
    useEffect(()=>
    {
        console.log("useffect call")
    })
    
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h1>call useeffect when componenet is created only</h1>
            <h1>Name:{state}</h1>
            <button onClick={()=>setState("jivan")}>change name</button>


        </div>
 )
}
export default UseEffectIQ;