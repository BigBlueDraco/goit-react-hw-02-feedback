import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import React from 'react';

export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    addGood = () =>  {
        this.setState(state => ({
            good: state.good+1, 
        }))
    }
    addNeutral = () => {
        this.setState(state => ({
            neutral: state.neutral+1, 
        }))
    }
    addBad = () => {
        this.setState(state => ({
            bad: state.bad+1, 
        }))
    }

    positivePercentage = () => {
        const total = Object.values(this.state).reduce((acc, elem)=>{
            return acc+elem;
        }, 0);
        if(total <= 0) return 0; 
        return Math.round(this.state.good/total*10000)/100 ;
    }
    render(){
        
        return(
        <>
        <Section title={this.props.title}>
            <div className='feedback-wrap'>
                <Button func={this.addGood} text="Good"/>
                <Button func={this.addNeutral} text="Neutral"/>
                <Button func={this.addBad} text="Bad"/>
            </div>
        </Section>
        
        <Section title="Statistic" >
            <Statistics 
                
                good ={this.state.good}
                neutral={this.state.neutral}
                bad = {this.state.bad}
                positivePercentage = {this.positivePercentage()}/>
        </Section>
        
        </>
    );
    }
    
}

Feedback.PropsTypes = {
    title: PropTypes.string,
    feedbackOptions: PropTypes.arrayOf(PropTypes.string,).isRequired,
}