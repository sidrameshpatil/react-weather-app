const monthNames = {
    0:"jan",
    1:"feb",
    2:"mar",
    3:"apr",
    4:"may",
    5:"jun",
    6:"jul",
    7:"aug",
    8:"sept",
    9:"oct",
    10:"nov",
    11:"dec",
}

const createDayString = (dateString) => {
    let weatherDate = new Date(dateString);
    let today = new Date();
    if(weatherDate === today){
        return "Today";
    }

    let day = weatherDate.getDate();
    let month = monthNames[weatherDate.getMonth()];
    return day+" "+month;

}


export {monthNames, createDayString};