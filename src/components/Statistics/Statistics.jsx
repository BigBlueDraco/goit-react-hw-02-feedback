import React from "react";

export class Statistics extends React.Component{
    
    render(){
        console.log(this.props);
        const {good, neutral, bad, positivePercentage} = this.props
        return(
            <>
                {this.props.title&&<h2>{this.props.title}</h2>}
                <div className="statistic-wrap">
                    <span>Good: {good}</span>
                    <span>Neutral: {neutral}</span>
                    <span>Bad: {bad}</span> 
                    <span>Positive Percentage: {this.props.positivePercentage?positivePercentage: 0}%</span>
                </div>
            </>       
        );
    }
}