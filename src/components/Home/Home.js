import React, { Component } from 'react'
import Axios from 'axios';
import Weather from '../Weather/Weather';

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             addressVal: '',
             errMsg: '',
             lat: '',
             lng:'',
             viewWeatherComponent: false
        }
    }
    handelAddressChange = (event) => {
        this.setState({
            addressVal: event.target.value,
            viewWeatherComponent: false
        })
    }
    getLatLng = (address) => {
        Axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address +'&key=AIzaSyCXklgzyG5zQ73-qqUM0unNPgPSO7S0GNg')
        .then(
            response => {
                this.setState({ 
                    lat: response.data.results[0].geometry.location.lat,
                    lng: response.data.results[0].geometry.location.lng
                })
                this.setState({
                    viewWeatherComponent: true
                })
                console.log(this.state.lat, this.state.lng)
            }
        ).catch(
            error => this.setState({ errMsg: error})
        )
    }

    


    render() {
        return (
            <div>
                <form>
                    <label htmlFor="address"> Address </label>
                    <input name="address" id="address" value={this.state.addressVal} onChange={this.handelAddressChange}/>
                    <button type="button"
                        onClick={()=>{
                            this.getLatLng(this.state.addressVal)
                            }}
                    > Get Weather </button>
                </form>
                <hr />
                {this.state.viewWeatherComponent && <Weather lat={this.state.lat} lng={this.state.lng} />}
            </div>

        )
    }
}

export default Home
