import React from "react";

class DidUpdate extends React.Component
{

    constructor()
    {
      super();
      this.state={
        count:0,
      }
    }
    componentDidUpdate(preProps,preState,snapshot)
    {
       console.warn("componentDidUpdate");
       if(preState.count===this.state.count)
       {
        console.warn("count is al ready exist ")
       }
       else
       {
        console.warn("value is update")
       }

    }
    render()
    {
        return(
            <div style={{backgroundColor:"skyblue"}}>
                <h1>ComponenetDidUpdate Lifecycle method{"  "+this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>
            <div style={{backgroundColor:"green"}}>
              <h3>if value is same then it show value is alerady exist </h3>
              <h3>check console for output exicution sequence </h3>
              <h1>ComponenetDidUpdate Lifecycle method 2{"  "+this.state.count}</h1>
              <button onClick={()=>this.setState({count:this.state.count})}>update</button>


            </div>
            </div>
        )
    }
}export default DidUpdate;