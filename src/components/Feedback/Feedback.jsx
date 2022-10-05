import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button';
import { Statistics } from 'components/Statistics/Statistics';
import React from 'react';

export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
    }

    addGood = () =>  {
        this.setState(state => ({
            good: state.good+1, 
            total: state.total+1
        }))
    }
    addNeutral = () => {
        this.setState(state => ({
            neutral: state.neutral+1, 
            total: state.total+1
        }))
    }
    addBad = () => {
        this.setState(state => ({
            bad: state.bad+1, 
            total: state.total+1
        }))
    }

    positivePercentage = () => {
        if(this.state.total <= 0) return 
        return Math.round(this.state.good/this.state.total*10000)/100 ;
    }
    render(){
        
        return(
        <>
        {this.props.title&&<h2>{this.props.title}</h2>}

        <div className='feedback-wrap'>
            <Button func={this.addGood} text="Good"/>
            <Button func={this.addNeutral} text="Neutral"/>
            <Button func={this.addBad} text="Bad"/>
        </div>

        <Statistics title="Statistic" 
        good ={this.state.good}
        neutral={this.state.neutral}
        bad = {this.state.bad}
        positivePercentage = {this.positivePercentage()}/>
        </>
    );
    }
    
}

Feedback.PropsTypes = {
    title: PropTypes.string,
    feedbackOptions: PropTypes.arrayOf(PropTypes.string,).isRequired,
}