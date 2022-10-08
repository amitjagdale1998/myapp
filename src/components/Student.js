import React from "react";
function Student(props)
{
    return(<div style={{backgroundColor:"skyblue", margin:10}}>
        <h1>Student componenet</h1>
        <h1>{props.name}</h1>
        <h2>{props.email}</h2>
    </div>)
    
}
export default Student;