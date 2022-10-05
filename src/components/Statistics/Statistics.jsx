import React from "react";

export class Statistics extends React.Component{
    
    render(){
        const {good, neutral, bad, positivePercentage} = this.props
        return(
            <>
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