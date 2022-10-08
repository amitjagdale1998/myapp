import React from "react";

const BasicForm=()=>
{
    const [name,setName]=React.useState("");
    const [check,setCheck]=React.useState(false);
    const [intrest,setIntrest]=React.useState("");
    function getDataForm(e)
    { 
        console.warn(name,check,intrest);
      e.preventDefault();
    }
    return(<div style={{backgroundColor:"skyblue", margin:10}}>
    <h1>*Basic Form*</h1>
    <form onSubmit={getDataForm}>
        <label>NAme:</label><input type="text" placeholder="type here Name" onChange={(e)=>setName(e.target.value)} ></input><br/>
        <select onChange={(e)=>setIntrest(e.target.value)}>
            <option>Marvel</option>
            <option>bollywood</option>
            <option> Hollywood</option>
        </select><br/>
        <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)}></input><span>Accept terms and conditkion</span><br/>

        <button type="submit">submit</button>
        <div>
        <h3>Output</h3>
        <h4>{name}</h4>
        <h4>{check}</h4>
        <h4>{intrest}</h4>
        </div>
         
    </form>
    </div>)
}
export default BasicForm; 