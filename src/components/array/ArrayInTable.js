import React from 'react'

function ArrayInTable()
{
const student=[
    {name:"amit",email:"amit@123",seatNo:"123"},
    {name:"akash",email:"akash@123",seatNo:"124"},
    {name:"anand",email:"anand@123",seatNo:"122"},
]
    return(<div align="center" style={{backgroundColor:"aliceblue"}}>
        <h1> using MAp meathod and array in table</h1>
        <table border="1px" align="center">
            <tr>
        <th>Name:</th>
        <th>Email:</th>
        <th>seatNo:</th>
        </tr>
        {
            student.map((st)=>
            <tr>
                <td>{st.name}</td>
                <td>{st.email}</td>
                <td>{st.seatNo}</td>
                </tr>
            )
        }
        </table>

    </div>)
}export default ArrayInTable;