import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import React from 'react';

export class Feedback extends React.Component{

    constructor(props){
        super(props);
        const state = this.props.feedbackOptions.reduce((acc, elem) =>{
            const obj = {[elem]: 0}
            return{...acc, ...obj}
        }, {});
        this.state = {...state};
        console.log(this.state)
        }
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    onLeaveFeedback = (e) => {
        console.log(e)
        console.log(e.target.textContent)
        this.setState(state => ({ 
            [e.target.textContent]: state[e.target.textContent]+1, 
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
        console.log(this.props)
        return(
        <>
        <Section title={this.props.feedbackTitle}>
            <div className='feedback-wrap'>
                {this.props.feedbackOptions.map(elem=>(
                    <Button key ={elem} func = {this.onLeaveFeedback} text = {elem}/>
                ))}
            </div>
        </Section>
        
        <Section title={this.props.statisticTitle} >
            <Statistics             
                good ={this.state.TEST}
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
    // feedbackOptions: PropTypes.arrayOf(PropTypes.string,).isRequired,
}