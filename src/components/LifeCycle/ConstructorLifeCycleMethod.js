import { render } from "@testing-library/react";
import React from "react";

class ConstructorLifeCycleMethod extends React.Component
{
constructor()
{
    super();
    console.log('constructor');
    this.state={
        name:"amit",
        sirName:"jagdale"
    }

}
render()

{
    console.log("render");
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h1> this is class components</h1>
            <h4>{this.state.name +" "}{"    "+this.state.sirName}</h4>
        </div>
    )
}
}export default ConstructorLifeCycleMethod;