import React, { Component } from 'react'
import './Weather.css';
import Currently from '../Currently/Currently';              
import Daily from '../Daily/Daily';              
import Hourly from '../Hourly/Hourly';           
import Axios from 'axios';
class Weather extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            forecast: [],
            errmsg: ''
        }
    }
    
    componentDidMount(){
        this.getWeather(this.props.lat, this.props.lng);
    }
    getWeather = (lat, lng) => {
        Axios.get('https://api.darksky.net/forecast/1141ccf047d614284a0674902bc3c89f/'+lat+','+lng +'/')
        .then(
            (response) => {
                this.setState({forecast : response.data})
                console.log(response.data)
            }
        ).catch(
            (err) => {
                this.setState({errmsg: err})
            }
        )
    }


    render() {
        const { forecast } = this.state
        return (
            <div>
                <Currently forecast_currently = {forecast.currently}/> 
                <Daily forecast_daily = {forecast.daily}/> 
                <Hourly forecast_hourly = {forecast.hourly}/> 
            </div>
        )
    }
}

export default Weather
