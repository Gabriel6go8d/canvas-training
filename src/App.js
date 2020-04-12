import React, {useState} from 'react';
import './App.css';
import Canvas4 from './Components/Canvas4';
import Canvas from './Components/Canvas';
import Canvas3 from './Components/Canvas3';
import Canvas2 from './Components/Canvas2';
// import Canvas from './Components/Canvas';
function App() {
  
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <button className='btn-primary btn mt-3' onClick={() => setShow(xx => !xx)}>Change Effect</button>
      {show && <Canvas/>}
      {!show && <Canvas4/>}
      {/* <Canvas /> */}
      <Canvas2 />
      {/* <Canvas3 /> */}
    </div>
  );
}

export default App;
