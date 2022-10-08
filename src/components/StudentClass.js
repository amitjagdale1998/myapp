import React from "react";
 export default class StudentClass extends React.Component{
   constructor()
   {
    super();
    this.state={
        name:"akash",
    }
   }
   render(){

    return(
        <div>
    <h2>Name:{this.props.name}</h2>
    <button onClick={()=>this.state.name}>update Name</button>

    </div>
    )
   }
}