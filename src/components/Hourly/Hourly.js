import React from 'react'
import './Hourly.css';

const Hourly = (props) =>  {
  const {forecast_hourly} = props
   
  if (forecast_hourly) console.log((forecast_hourly.data))

  if (forecast_hourly) {
    
    return (
      <div className="hourly">
          <h2> Hourly</h2>
        {
          forecast_hourly.data.map((item, index)=>{
            return (
              <div className="hourly-tile" key={index}>
                <p>
                  {getHour(item.time)}:00
                  <img src={`images/${item.icon}.jpg`} alt="icon" width="50" />
                  {item.summary}
                </p>
              </div>
            ) 
          })
        }
        <div className="clear"></div>
        </div>
        
    )
  } else return (
    <div className="hourly">
      <h2> Hourly </h2>
      <p> No Data </p>
    </div>
  )
  
}

function getHour (duration) {
  var h = Math.floor(duration / (60 * 60) % 24)
  return h < 10? '0'+h : h
}


export default Hourly