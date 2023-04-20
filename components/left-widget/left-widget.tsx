import React from "react";
import styles from "./left-widget.module.css";
import Image from "next/image";
import { clearScreenDown } from "readline";

interface LeftWidgetProps {
  data: {
    city: string;
    time: string;
    wind: string;
    humidity: string;
    aqi: number;
    pressure: string;
    date: string;
  };
}

function LeftWidget({ data }: LeftWidgetProps) {
  console.log({ data });
  return (
    <div className={styles.weather_top_card}>
      <div>
        <div>
          <div className={styles.location_Time}>
            <Image
              src="/icons/location-pin.png"
              alt="image"
              width="40"
              height="40"
            />
            <h3>{data.city}</h3>
          </div>
          <div className={styles.time_date_wrapper}>
            <div className={styles.time}>
              <p>{data.time}</p>
            </div>
            <div className={styles.date_day}>
              <h4>Tuesday</h4>
              <h4>{data.date}</h4>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.weather__status}>
          <div>
            <div className={styles.weather_content}>
              <Image
                src="/icons/icons-pressure-64.png"
                alt="image"
                width="40"
                height="40"
              />
              <span>{data.pressure}</span>
            </div>
            <div className={styles.weather_content}>
              <Image
                src="/icons/icons-hygrometer-64.png"
                alt="image"
                width="40"
                height="40"
              />
              <span>{data.humidity}%</span>
            </div>
          </div>
          <div>
            <div className={styles.weather_content}>
              <Image
                src="/icons/icons-wind-64.png"
                alt="image"
                width="40"
                height="40"
              />
              <span>{data.wind} kph</span>
            </div>
            <div className={styles.weather_content}>
              <Image
                src="/icons/icons-air-quality-64.png"
                alt="image"
                width="40"
                height="40"
              />
              <span>CO {data.aqi}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftWidget;
export type { LeftWidgetProps };
