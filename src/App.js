import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
function App() {
  return (
    <>
    <Particles
      params={{
         number:{
           value:50,
           density:{
             enable:true,
             value_area:900
           },
           "size": {
            "value": 3
        }
         },
         shape:{
           type:"circle",
           stroke:{
             width:6,
             color:"red"
           }
         },
         "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
      }}
    />
    <Navbar/>
    <Header/>
    </>
  );
}

export default App;
