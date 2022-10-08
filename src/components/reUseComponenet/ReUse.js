import React from "react";
import User from "./User";

function ReUse()
{
    const user=[
        {name:"amit",email:"amit@123",seatNo:"123"},
        {name:"akash",email:"akash@123",seatNo:"124"},
        {name:"anand",email:"anand@123",seatNo:"122"},
    ]
 return(
    <div>
        <h1>ReUse Component</h1>
        <h1>Reuse componenet by using props</h1>
        {
            user.map((user,i)=>
            <User data={user}/>)
        }
        
    </div>
 )
}
export default ReUse;