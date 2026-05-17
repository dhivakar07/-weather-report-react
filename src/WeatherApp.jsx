import HourlyForecast from "./components/HourlyForecast";
import Navbar from "./components/Navbar";
function WeatherApp() {
  return (
    <>
      <div className="app-component">
        <Navbar />
        <HourlyForecast />
      </div>
    </>
  );
}
export default WeatherApp;
