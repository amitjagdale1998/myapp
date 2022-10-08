import React ,{useState} from 'react';
const FirstPage=()=>
{
    name1=document.getElementById('fname').value;
    const  lastname=document.getElementById('lname').value;
    function update()
    {
     setData({name1},{lastname});
    }
    const [data,setData]=useState('here data');
   return(
    <>
    FirstName:<input id="fname" onChange={update} placeholder='Enter firstname'></input>
    LastName:<input id="lname" onChange={update} placeholder='Enter Lastname'></input>
    <button type="submit" onClick={update}>submit </button>
    <h1>{data}</h1>
    
    </>
   )
}
export default FirstPage;
