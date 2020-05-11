import React, {useState} from 'react';
import './App.css';
import CanvasExplote from './Components/CanvasExplote';
import CanvasRain from './Components/CanvasRain';
import CanvasRain2 from './Components/CanvasRain2';
import CanvasRunAway from './Components/CanvasRunAway';
import MyNavbar from './Components/MyNavbar';
import Footer from './Components/Footer';
import About from './Components/About'

function App() {
  
  const [active, setActive] = useState(1)
  const [toShow, setToShow] = useState(<CanvasExplote/>)

  const change = (view) =>{
    document.getElementById('area').classList.add('areahidde')
    setTimeout(()=>{
      switch (view){
        case 'explote':
          setToShow(<CanvasExplote/>)
          setActive(1)
          break
        case 'run away':
          setToShow(<CanvasRunAway/>)
          setActive(2)
          break
        case 'rain':
          setToShow(<CanvasRain/>)
          setActive(3)
          break
        case 'rain2':
          setToShow(<CanvasRain2/>)
          setActive(4)
          break
        case 'about':
          setToShow(<About/>)
          setActive(5)
          break
        default:
          break
      }
      document.getElementById('area').classList.remove('areahidde')
    }, 400)
  }

  return (
    <div className="App app-content">
      <MyNavbar action={change} active={active}/>
      <div className='area' id='area'>
        {toShow}
      </div>
      <h1>test1</h1>
      <Footer/>
    </div>
  );
}

export default App;
