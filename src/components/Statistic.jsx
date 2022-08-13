import React from "react";
import PropTypes from 'prop-types';

const Statistic = ({ label, value }) => {
    
    return (
        
        <div style={{height: '50px'}}  >
            <span className="label">{label}</span>
            <span className="percentage">   {value}%</span>
        </div>
    )
}
Statistic.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
  };


export default Statistic;