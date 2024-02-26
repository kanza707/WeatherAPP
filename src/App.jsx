import './App.css';
import { useEffect, useState } from 'react';
import { WiCloud } from "react-icons/wi";


function App() {
  const [result, setresult] = useState({});
  const [city, setcity] = useState("");
  const Api = {
    key: "a95d3b0d3b0f6501c6df22893a05115d",
    url: "https://api.openweathermap.org/data/2.5/weather"
  };

  const handleSearch = () => {
    fetch(`${Api.url}?q=${city}&appid=${Api.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setresult(data);
      });
  };

  useEffect(() => {

    handleSearch();
  }, []);

  console.log(result);

  return (
    <div className='app'>
      <h1>weather app</h1>
      <div>
        <input type='text' name='city' onChange={(e)=> setcity(e.target.value)} />
        <button type='button' onClick={handleSearch}>search</button>
      </div>
      <h1>{result.main && result.main.temp} <sup>o</sup>F</h1>
      <h1><WiCloud />{result.main && result.main.humidity}</h1>
    </div>
  );
}

export default App;
