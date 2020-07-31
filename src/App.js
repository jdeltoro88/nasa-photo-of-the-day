import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";


function App() {
  
  const [nasaData, setNasaData] = useState([])
  
  useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2013-03-14') 

.then(response => {
  console.log(response) 

  setNasaData(response.data.hdurl)
})

.catch(error => {
  console.log('error!', error) 
})
.then(function() {
}) 
  }, []) 
  return (
    <div className="App">
      <img src={nasaData} alt= 'Nasaphoto'>
      </img>
    </div>
  );
}
export default App;