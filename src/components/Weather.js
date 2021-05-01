import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherItem from "./WeatherItem";

import WeatherHeader from "./WeatherHeader";


// this component gets the WOEID as the url parameter and 
// fetches data from the api and renders 
// renders the all the weather details of the respective location

const Weather = () => {
    const { woeid } = useParams();;
    const [weatherData, setWeatherData] = useState(null);
    const [weatherArray, setWeatherArray] = useState(null);
     

    // useEffect hook runs once when the components renders for the first time
    useEffect(async ()=>{
        let res = await fetch(`https://www.metaweather.com/api/location/${woeid}`);
        if(res.ok){
            let responseData = await res.json()
            setWeatherData(responseData);
            setWeatherArray(responseData.consolidated_weather);
        }
    }, [])

    
    return (
        <div className="weatherContainer container">

            {
                weatherData && <WeatherHeader weatherData={weatherData} />
            }
            
            {
                weatherArray && weatherArray.map((oneDayWeather)=>{
                    return <WeatherItem oneDayWeather={oneDayWeather} />
                })
            }
        </div>
    )
}


export default Weather;