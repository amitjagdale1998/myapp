import React from "react";

function User(props)
{
    return <div style={{backgroundColor:"teal"}}>
        <div border="black">
        <h4>{props.data.name}{" "+props.data.email}{" "+props.data.seatNo}</h4>
        </div>
    </div>
}
export default User;