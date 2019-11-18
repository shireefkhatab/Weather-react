import React from 'react'
import './Daily.css';

const Hourly = (props) => {
  const {forecast_daily} = props
   
  if (forecast_daily) console.log((forecast_daily.data))

  if (forecast_daily) {
    
    return (
        < div className = "hourly" >
          <h2>Daily</h2>
        {
          forecast_daily.data.map((item, index)=>{
            return (
              <div className="daily-tile" key={index}>
                <img src={`images/${item.icon}.jpg`} alt="icon" width="100" />
                <p> {getDay(item.time)}
                  - {item.summary} </p> 
               </div>
            )
          })
        }
        <div className="clear"> </div>
        </div>
    )
  } else return (
    <div className = "hourly" >
      <h2> Daily </h2>
      <p> No Data </p>
    </div>
  )
  
}

function getDay (duration) {
  var d = new Date(duration*1000)
  return d.toDateString().split(' ')[0]
}


export default Hourly