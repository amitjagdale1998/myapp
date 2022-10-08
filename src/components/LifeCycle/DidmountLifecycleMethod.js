import React from "react";
class DidmountLifecycleMthods extends React.Component
{
    constructor()
    {
        super();
        console.warn("constructor");
        this.state={
            name:"amit",
        }
    }
    componentDidMount()
    {
        console.warn('componenet did mount')
    }

    render()
    {
      console.warn("render");
      return(<div style={{backgroundColor:"skyblue"}}>
          <h3>This program check how to call render,constructor,and componentDidMount</h3>
          <h3>result:1 st call constructor</h3>
          <h3>result:2nd call renderr</h3>
          <h3>result:3rd call Didmount<p>mostly "componentDidMount()" is used 
            to call api becase first all code process completed then it call api</p></h3>
            <h3>{this.state.name}</h3>
            <button onClick={()=>this.setState({name:"akash"})}>click</button>
        </div>)
    }
}export default DidmountLifecycleMthods;