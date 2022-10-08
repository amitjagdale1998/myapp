import React from "react";
class RenderLifecycleMethod extends React.Component
{
   constructor()
   {
    super();
     this.state={
        name:"amit",
     }
   }
   render()
   {
    return(
        <div style={{backgroundColor:"skyblue"}}>
           <h1>render lifecycle method</h1>
           <span style={{color:"red"}}><b>Note:</b>render method use only in class</span>
           <h4>{this.state.name}</h4>
           <button onClick={()=>this.setState({name:'akash'})}>update data</button>
        </div>
    )
   }

}export default RenderLifecycleMethod;