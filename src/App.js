import logo from "./logo.svg";
import "./App.css";

function App() {
  const gpsPostion = () => {
    if ("geolocation" in navigator) {
      // Request the user's location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Successfully retrieved the user's location
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // Do something with the latitude and longitude
          alert("Latitude: ", latitude);
          alert("Longitude: ", longitude);
        },
        (error) => {
          // Handle errors
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      alert("Geolocation is not supported in this browser.");
    }
  };
  return (
    <div className="App">
      <button onClick={() => gpsPostion()}>gpsPostion</button>
    </div>
  );
}

export default App;
