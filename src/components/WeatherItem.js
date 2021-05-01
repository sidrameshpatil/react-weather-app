import { createDayString } from "./DateHelper";
import "./WeatherItem.css";
import { Redirect } from "react-router-dom";


// this components renders the weather data of a single day as a card
// its gets single day weather data passed from the its parent component weather

const WeatherItem = ({oneDayWeather}) => {
    let date = createDayString(oneDayWeather.applicable_date);
    let humidity = `${oneDayWeather.humidity}%`;
    let visibility = `${Math.round(oneDayWeather.visibility)} miles`;
    let pressure = `${oneDayWeather.air_pressure}mb`;
    let weatherIconLink = `https://www.metaweather.com/static/img/weather/png/64/${oneDayWeather.weather_state_abbr}.png`;
    let weatherStateName = oneDayWeather.weather_state_name;
    let min_temp = Math.round(oneDayWeather.min_temp);
    let max_temp = Math.round(oneDayWeather.max_temp);
    let windSpeed = Math.round(oneDayWeather.wind_speed);
    let temp = Math.round(oneDayWeather.the_temp);
    let windDirection = Math.round(oneDayWeather.wind_direction);


    return(
        <div className="row weatherItem p-4 m-2" key={`${oneDayWeather.id}`} >

            <div className="col-md-6">
                <div className="row">
                    <div className="col-6">
                        <h4 className="dateTitle mb-4">{date}</h4>
                        <div className="weather-icon mb-2">
                            <img src={weatherIconLink}></img>
                        </div>
                        <p className="weatherState">{weatherStateName}</p>
                    </div>

                    <div className="col-6">
                         <div className="infoBlock">
                            <h6>Max Temp: </h6>
                            <small>{max_temp}</small>
                        </div>
                        <div className="infoBlock">
                            <h6>Min Temp: </h6>
                            <small>{min_temp}</small>
                        </div>
                        <div className="infoBlock">
                            <h6>Wind Speed: </h6>
                            <small>{windSpeed}</small>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-6 weather-details">

                <div className="row">

                    <div className="col-6">
                        <div className="infoBlock">
                            <h6>Humidity: </h6>
                            <small>{humidity}</small>
                        </div>
                        <div className="infoBlock">
                            <h6>Visibility: </h6>
                            <small>{visibility}</small>
                        </div>
                        <div className="infoBlock">
                            <h6>Pressure:</h6>
                            <small>{pressure}</small>
                        </div>
                    </div>

                    <div className="col-6">
                        <h6>
                            Wind Direction
                        </h6>
                        {windDirection} degree
                    </div>
                </div>

            </div>
        </div>
    )
}


export default WeatherItem;