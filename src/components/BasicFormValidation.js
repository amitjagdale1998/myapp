import React from "react"

function BasicFormValidation()
{
    const[errors,setErrors]=React.useState(false);
    const[passError,setPassError]=React.useState(false);
    const[user,setUser]=React.useState("");
    const[password,setPassword]=React.useState("");
    function loginHandle(e)
    {

        if( user <6|| password <6)
        {
          alert("password to small");
        }
        else
        {
         alert("submit sucessfuly")
        }
        e.preventDefault();
    }
    function loginHandler(e)
    {
        let lengthId=e.target.value.length;
        if(lengthId<6)
        {
            console.warn(lengthId);
         setErrors(true);
        }
        else{
            setErrors(false);
        }
    }
    function passwordHandler(e)
    {
        let lengthPassword=e.target.value.length;
        if(lengthPassword<6)
        {
            setPassError(true);
        }
        else{
            setPassError(false);
        }
    }
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <form onSubmit={loginHandle}>
       <h1>Bsic Form Validation</h1>
       <input type="text" placeholder="Enter user id"  onChange={loginHandler}></input>
      <span>{errors?<h4>write 6 to 20 character</h4>:false}</span>
        <input type="text" placeholder="Enter password" onChange={passwordHandler}></input>
        <span>{passError?<h4>write 6 to 16 digits</h4>:false}</span><br/>
       <button  type="submit">Login</button>
       <button type="reset">Cancel</button>
       </form>
       
        </div>
    )
}export default BasicFormValidation;