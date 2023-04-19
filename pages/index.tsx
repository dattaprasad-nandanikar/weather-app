import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { getWeather } from "@/utils/network-request";
import LeftWidget from "../components/left-widget/left-widget";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [weatherData, setweatherData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await getWeather();

      setweatherData(res.data);
      // setweatherData(mockata.data);
      console.log(res);
    };

    getData();
  }, []);

  const leftWidgetProps = {
    city: weatherData?.location.name,
    time: new Date(weatherData?.location.localtime).toLocaleTimeString(
      "en-us",
      { hour: "2-digit", minute: "2-digit", hour12: false }
    ),
    wind: weatherData?.current.wind_kph,
    humidity: weatherData?.current.humidity,
    aqi: Math.round(weatherData?.current.air_quality.co),
    pressure: weatherData?.current.pressure_in,
    date: new Date(weatherData?.location.localtime).toLocaleDateString("en-in"),
  };

  return (
    <div>
      <LeftWidget data={leftWidgetProps} />
    </div>

    // {/* <p>City : {weatherData?.location.name}</p>
    // <p>Date and Time : {weatherData?.location.localtime}</p>
    // <p>Pressure : {weatherData?.current.pressure_in}</p>
    // <p>Humidity : {weatherData?.current.humidity}</p>
    // <p>Wind Speed : {weatherData?.current.wind_kph}</p>
    // <p>Carbon monoxide level : {weatherData?.current.air_quality.co}</p>
    // <p>Temperature : {weatherData?.current.temp_c}</p>
    // <p>Weather: {weatherData?.current.condition.text}</p> */}
  );
}
