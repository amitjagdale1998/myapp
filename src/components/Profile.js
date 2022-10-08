import React from "react";

function Profile()
{
    const[show,setShow]=React.useState(false);
    if(show)
    {
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h1>Conditional rendering/If else</h1>
            <p> This is true condition</p>
            <p>this is using if else but it is not genun way</p>
            <p><b>User ternery operators</b></p>
            <button onClick={()=>setShow(false)}>change data</button>
        </div>
        )}
        else
        {
          return(
            <div style={{backgroundColor:"yellow"}}>
            <h1> this is false condition</h1>
            <p>this is using if else but it is not genun way</p>
            <p><b>User ternery operators</b></p>
            <button onClick={()=>setShow(true)}> change data</button>
            </div>
          )
        }
    
}export default Profile;