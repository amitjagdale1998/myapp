import React from "react";

function ArrayList()
{
    const List=[
        {name:"amit",email:"amit@123",seatNo:"123"},
    {name:"akash",email:"akash@123",seatNo:"124"},
    {name:"anand",email:"anand@123",seatNo:"122"},

    ]
    const nestedList=[
        {name:"amit",email:"amit@123",seatNo:"123",address:
        [{village:"pedgaon",city:"satara",state:'maharashtra'}]},
    {name:"akash",email:"akash@123",seatNo:"124",address:
    [{village:"pedgaon",city:"satara",state:'maharashtra'}]},
    {name:"anand",email:"anand@123",seatNo:"122",address:[{village:"pedgaon",city:"satara",state:'maharashtra'}]},

    ]

    return(
        <div style={{backgroundColor:"yellowgreen"}} border="1px">
        <h1> Array List ,bootstrap,uniq key</h1>
        <table border="1px" align="center">
            <tr>
            <td>sr.no</td>
                <td>Name:</td>
                <td>Email:</td>
                <td>seatNo:</td>
            </tr>
        {
            List.map((List,i)=>
            
                List.seatNo>=122?
             <tr key={i}>
                <td>{i+1}</td>
                <td>{List.name}</td>
                <td>{List.email}</td>
                <td>{List.seatNo}</td>
             </tr>:null
             

            )
            
        }
        </table >
        <table border="1px" align="center" style={{backgroundColor:"yellow"}}>
        <h1>Nested arry Table</h1>
        <tr>
            <td>Sr.No:</td>
            <td>Name:</td>
            <td>Email:</td>
            <td>seatNo:</td>
            <td>Address:</td>
        </tr>
        {
            nestedList.map((Alist,i)=>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{Alist.name}</td>
            <td>{Alist.email}</td>
            <td>{Alist.seatNo}</td>
            <td><tr key={i}>
                <td>village:</td>
                <td>city:</td>
                <td>state:</td>
                </tr>
                {
                    Alist.address.map((add,key)=>
                    <tr>
                    <td>{add.village}</td>
                    <td>{add.city}</td>
                    <td>{add.state}</td>
                    </tr>
                        )
                }</td>
          </tr>  )
          
        }
        </table>
        </div>
    )
}export default ArrayList;