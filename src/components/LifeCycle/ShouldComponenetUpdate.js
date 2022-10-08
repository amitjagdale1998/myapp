import React from "react";

class ShouldComponenetUpdate extends React.Component
{
    constructor()
    {
       super();
       this.state={
        count:0,
       }
    }
    shouldComponentUpdate()
    {
       console.warn("shouldComponentUpdate"+this.state.count );
       return true;
       

    }
    render()
    {
        return(<div>
       <h1>ShouldComponentUpdate </h1>
       <h3>counter{this.state.count}</h3>
       <button onClick={()=>this.setState({count:this.state.count+1})}>UpdateCount</button>
        </div>)
    }

}export default ShouldComponenetUpdate;