import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'


function TopBar() {
  const [weatherData, setWeatherData] = useState({ location: "", feelsLike: "" });
    const {setLoggedIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const LogOut = () => {
        setLoggedIn(false)
        navigate("/")
    }

    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const response = await fetch("https://wttr.in/Tallinn?format=j1");
          const data = await response.json();
          
          const feelsLikeC = data.current_condition?.[0]?.FeelsLikeC;
          const city = data.nearest_area?.[0]?.areaName?.[0]?.value;
          const country = data.nearest_area?.[0]?.country?.[0]?.value;
  
          setWeatherData({
            location: `${city}, ${country}`,
            feelsLike: `${feelsLikeC}°C`
          });
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
      fetchWeather();
    }, []);
  

  return (
    <>  
        <label style={{margin : "3%"}} htmlFor="">{weatherData.location} </label> 
         <label style={{margin : "3%"}}> Feels like:{weatherData.feelsLike}</label> 

        <button style={{height : "50px", marginTop: "10px"}} onClick={() => LogOut()}>Log Out</button>
        
    </>
  )
}

export default TopBar