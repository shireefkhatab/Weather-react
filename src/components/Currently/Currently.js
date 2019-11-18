import React from 'react'
import './Currently.css';

const Currently = (props) => {
  const {forecast_currently} = props
   
  if (forecast_currently) console.log((forecast_currently))

  if (forecast_currently) {
    
    return (
        <div className="currently">
            <h2> Currently </h2>
            <img src={`images/${forecast_currently.icon}.jpg`} alt="icon" width="150" />
            <p> {forecast_currently.summary} - {forecast_currently.icon}</p>
        </div>
    ) 
  } else return (
    <div className="currently">
      <h2> Currently </h2>
      <p> No Data </p>
    </div>
  )
  
}


export default Currently