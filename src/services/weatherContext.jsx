import React, { createContext, useState } from "react";
import weatherData from "../data/weatherData.json";
import defaultDaily from "../data/defaultDaily.json";
import dataOfWeek from "../data/weatherWeek.json";

const weatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const defaultCity = "tokyo";
  const [unit, setUnit] = useState("metric");
  const [cityName, setCityName] = useState(defaultCity);
  const defaultData = weatherData;
  const [data, setData] = useState(defaultData);
  const [dailyData, setdailyData] = useState(defaultDaily.list);
  const defaultWeeklyData = dataOfWeek;
  const [weeklyData, setWeeklyData] = useState(defaultWeeklyData);
  const KEY = "764002445667d2083ffa821ec2b1eda5";
  const [currentType, setCurrentType] = useState(
    "mx-auto max-w-screen-md mt-1 py-5 px-32 bg-gradient-to-br from-cyan-400 to-blue-700 h-fit shadow-xl shadow-gray-400"
  );

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const values = {
    data,
    setData,
    setUnit,
    unit,
    cityName,
    setCityName,
    KEY,
    setdailyData,
    days,
    dailyData,
    weeklyData,
    setWeeklyData,
    currentType,
    setCurrentType,
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <weatherContext.Provider value={values}>{children}</weatherContext.Provider>
  );
};

export default weatherContext;
