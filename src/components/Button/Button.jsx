import React, { Component } from "react";
export class Button extends Component {
    render(){
        console.log(this.props)
        return(
            <button type="button" onClick={() => {this.props.func()}}>{this.props.text}</button>
        )
    }
        
}