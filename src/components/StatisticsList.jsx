import React from "react";
import Statistic from "./Statistic";
import "../styeles/normalize.css";
import PropTypes from 'prop-types';

import "../styeles/StatisticsList.css"
import TitleH2 from "./TitleH2";

// console.log(statistics);
const StatisticsList = ({ title, stats }) => {
    
    return (
    <section className="statistics">
         <TitleH2 title={title}/>
        
        <ul className="stat-list">            
            {stats.map(item => (
                <li className="item" key={item.id} >
                    <Statistic
                        value={item.percentage}
                        label={item.label}
                    />
                </li>
        ))}
        </ul>
    </section>
    )
}

StatisticsList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  };

export default StatisticsList;
