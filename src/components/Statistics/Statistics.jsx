import React from "react";
import PropTypes from 'prop-types';

export const Statistics = ({names, values, percentageOptions:{iDs, func}}) => {
        return(
            <>
                {names.map((elem, index) => (
                    <StatisticItem key={elem} name={elem} value={values[index]}/>
                ))}

                {iDs.map(elem => (
                    <StatisticPercent key = {elem} name = {elem} value = {func(elem)} />
                ))}
            </>       
        );
}

const StatisticItem = ({name, value}) =>{
    return(
        <span>{name}: {value}</span>
    )
}
const StatisticPercent = ({name, value}) => {
    return(
        <span>{name} feedback percentage: {value}</span>
    )  
}

Statistics.propTypes ={
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    percentageOptions: PropTypes.exact({
        iDs: PropTypes.arrayOf(PropTypes.string).isRequired,
        func: PropTypes.func.isRequired
    })
}