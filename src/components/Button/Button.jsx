import React, { Component } from "react";
export class Button extends Component {
    render(){
        return(
            <button type="button" onClick={(e) => {this.props.func(e)}}>{this.props.text}</button>
        )
    }
        
}