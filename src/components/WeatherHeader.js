

// This function is used to retrieve date info in the desired format by passing a date in
// string format
const retriveTime = (timeStampString) => {
    let date =  new Date(timeStampString);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return hours+":"+minutes;
    
}


// this component renders the header part of weather page
const WeatherHeader = ({weatherData}) => {
    let title = weatherData.title;
    let parentPlace = weatherData.parent.title;
    let sunriseTime = retriveTime(weatherData.sun_rise);
    let sunsetTime = retriveTime(weatherData.sun_set);
    let time = retriveTime(weatherData.time);

    return (
        <div className="WeatherHeader row p-3">
            <div className="col-6">
                <h4>{title}</h4>
                <p>{parentPlace}</p>
            </div>
            <div className="d-flex justify-content-around col-6">
                <p><b>Sun rise</b> {sunriseTime}</p>
                <p><b>Sun set</b> {sunsetTime}</p>
                <p><b>Time</b> {time}</p>
                
            </div>
        </div>
    )
}

export default WeatherHeader;