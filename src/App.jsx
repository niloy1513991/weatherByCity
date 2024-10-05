import React, { useEffect, useState } from "react";
import CurrentTime from "./components/CurrentTime";
import WeatherInfo from "./components/WeatherInfo";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [city, setCity] = useState("Dhaka");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_key = "99fe690870d1ccf2de11c285df7d1f95";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
        setError(null);
        console.log(weatherData);
      } else {
        setWeatherData(null);
        setError("Error fetching the weather data");
      }
    } catch (error) {
      console.log("Error fetching weather data: ", error);
      setWeatherData(null);
      setError("Error fetching the weather data");
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const tempCelsius =
    weatherData && weatherData.main ? weatherData.main.temp - 273.15 : null;
  const idName =
    weatherData && weatherData.weather ? weatherData.weather[0].id : null;

  function getImageName(idName) {
    if (idName >= 200 && idName <= 232) {
      return "thunder.png";
    } else if (idName >= 300 && idName <= 321) {
      return "drizzle.png";
    } else if (idName >= 500 && idName <= 531) {
      return "rain.png";
    } else if (idName >= 600 && idName <= 622) {
      return "snow.png";
    } else if (idName >= 701 && idName <= 781) {
      return "atmosphere.png";
    } else if (idName === 800) {
      return "clear.png";
    } else if (idName >= 801 && idName <= 804) {
      return "atmosphere.png";
    } else {
      return "clear.png"; // Default case if idName doesn't match any condition
    }
  }

  return (
    <>
      <div
        id="container"
        className="flex flex-col h-[667px] w-[375px] mx-auto mt-4 rounded-xl bg-gradient-to-b from-light-blue to-dark-blue"
      >
        <CurrentTime currentTime={currentTime} />
        <WeatherInfo
          weatherData={weatherData}
          tempCelsius={tempCelsius}
          idName={idName}
          getImageName={getImageName}
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-4 inputs w-[350px] h-20 flex justify-around"
        >
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
            className="h-14 my-auto w-60 pl-4 text-2xl font-bold text-white bg-dark-blue rounded-md"
          />
          <button
            type="submit"
            className="bg-light-blue text-blue-700 rounded-lg h-14 my-auto w-20 text-center justify-center items-center text-2xl font-bold"
          >
            Get
          </button>
        </form>
        <div className="copyright text-slate-200 text-center h-10 w-60 mx-auto mt-2 flex justify-center items-center">
          &copy;niloykumarmohonta
        </div>
      </div>
    </>
  );
};

export default App;
