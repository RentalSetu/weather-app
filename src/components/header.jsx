import { useEffect, useState } from "react";
import marker from "../assets/Vector.png";
import chevronRight from "../assets/chevron-right.png";
import cloud from "../assets/cloud.png";

const Header = () => {
  //const [weatherData, setWeatherData] = useState(null);
  const accessKey = import.meta.env.WEATHER_API_KEY;
  console.log(accessKey, "accessKey");
  useEffect(() => {
    //   // const savedData = localStorage.getItem("weatherData");
    //   // console.log(savedData, "savedData");

    //   // if (savedData && savedData !== "undefined") {
    //   //   const parsedData = JSON.parse(savedData);
    //   //   console.log(parsedData, "parsedData");
    //   //   const lastFetched = new Date(parsedData.data.location.localTime);
    //   //   const now = new Date();

    //   //   const hoursDiff = Math.abs(now - lastFetched) / (1000 * 60 * 60);
    //   //   if (hoursDiff < 24) {
    //   //     setWeatherData(parsedData);
    //   //   }
    //   // }
    fetch(
      `http://api.weatherstack.com/current?access_key=${accessKey}&query=India, Rajasthan,Udaipur`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        const weatherContditon = {
          location: data.location.name,
          weather_descriptions: data.current.weather_descriptions,
          date: "",
        };

        localStorage.setItem(
          "weatherData",
          JSON.stringify({ weatherContditon })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const weatherData = localStorage.getItem("weatherData");
  console.log(weatherData, "weatherData");
  const parsedData = JSON.parse(weatherData);
  console.log(parsedData, "parsedData");
  return (
    <div className="flex w-full flex-col lg:flex-row justify-between ">
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-white justify-center items-center">
            <img src={marker} alt="marker" className="w-4 h-5" />
            <h1 className="font-inter font-medium text-[24px]">
              {parsedData.weatherContditon.location}
            </h1>
            <img src={chevronRight} alt="marker" className="w-5 h-5" />
          </div>
          <h1 className="font-medium font-inter text-5xl text-white">
            {parsedData.weatherContditon.weather_descriptions[0]}
          </h1>
        </div>
        <div className="flex gap-1 flex-col">
          <h1 className="font-medium font-inter text-6xl text-white">26°C</h1>
          <h1 className="font-normal font-inter text-[18px] text-white">
            Sunday | 12 Dec 2023
          </h1>
        </div>
      </div>
      <div>
        <img src={cloud} alt="cloud" className="w-[321px] h-[254px]" />
      </div>
    </div>
  );
};

export default Header;
