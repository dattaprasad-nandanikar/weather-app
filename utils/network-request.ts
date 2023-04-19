import { API_BASE_URL } from "@/constants/config";
import axios from "axios";

const getWeather = async () => {
  return await axios.get(
    `${API_BASE_URL}/forecast.json?key=af2123610792474dbcd102707230104&q=dharwad&aqi=yes`
  );
  console.log();
};

export { getWeather };
