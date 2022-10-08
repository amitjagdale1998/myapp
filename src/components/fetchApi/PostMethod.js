import React from "react"

function PostMethod()
{
    const[name,setName]=React.useState("");
    const[lname,setLname]=React.useState("");
    const[mail,setMail]=React.useState("");
    const[pass,setPass]=React.useState("");
    function handleSubmit(e)

    { 
        alert("handle submit call");
        console.warn({name,lname,mail,pass});
        let data={name,lname,mail,pass};
        fetch('http://localhost:5000/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>
        {
            console.warn("result",result);
        })
        e.preventDefault();
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
           FirstName:<input type="text" 
           value={name} onChange={(e)=>{setName(e.target.value)}}></input><br></br>
           LastName:<input  type="text" 
           value={lname} onChange={(e)=>{setLname(e.target.value)}} ></input><br></br>
           Email:<input type="mail" value={mail} name="mail"
           onChange={(e)=>setMail(e.target.value)}></input><br></br>
           Password:<input type="password" value={pass} name="pass" 
           onChange={(e)=>setPass(e.target.value)}></input>
           <button type="submit">SignUp</button>
           <button type="reset" >Cancel</button>
           </form>
        </div>
    )
}
export default PostMethod;