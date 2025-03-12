export async function getWeatherData() {
   
      const response = await fetch("https://wttr.in/Tallinn?format=j1");
      const data = await response.json();
      
      const feelsLikeC = data.current_condition?.[0]?.FeelsLikeC;
      const city = data.nearest_area?.[0]?.areaName?.[0]?.value;
      const country = data.nearest_area?.[0]?.country?.[0]?.value;
            
      return {
        location: `${city}, ${country}`,
        feelsLike: `${feelsLikeC}°C`
      };
   
  }
  