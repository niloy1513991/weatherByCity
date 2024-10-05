import React from "react";

const WeatherInfo = ({ weatherData, tempCelsius, idName, getImageName }) => (
  <>
    <div className="date w-[372] h-16 text-slate-100 text-5xl mx-auto text-center flex justify-center items-center mt-4 font-bold">
      {weatherData ? weatherData.name : "Loading"}
    </div>
    <div className="image h-40 w-72 flex justify-center items-center mx-auto mt-6">
      <img
        src={getImageName(idName)}
        alt="weather icon"
        className="h-32 w-auto"
      />
    </div>
    <div className="date w-80 h-16 text-slate-100 text-7xl mx-auto text-center flex justify-center items-center mt-2">
      {tempCelsius !== null ? `${tempCelsius.toFixed(1)}°C` : "..."}
    </div>
    <div className="weatherCondition text-white h-10 w-40 mx-auto mt-4 text-center flex justify-center items-center">
      {weatherData ? weatherData.weather[0].description : "Loading..."}
    </div>
  </>
);

export default WeatherInfo;
