import React ,{useState} from "react";
 const GetInput=()=>
{
    const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);
    function getData(val)
    {
       console.log(val.target.value);
       setData(val.target.value);
       setPrint(val.target.value);
    }
    return(
        <>
        <h1>Get Input value</h1>
        
        <h2>{data}</h2>
        {
                print ? <h3> {data}</h3>:null
        }
        <input type='text' onChange={getData}  />
        <button onClick={()=>setPrint(true)}>Print Data</button>
        
            
        
        </>
    )
}
export default GetInput;