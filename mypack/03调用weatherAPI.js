const weather = require('./weather.js');

weather.queryWeather('101010100',(data)=>{
    console.log(data);
    console.log(data.weatherinfo.WD);
});