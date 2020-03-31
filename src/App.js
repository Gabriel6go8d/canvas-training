import React from 'react';
import './App.css';
import MyNavbar from './Components/MyNavbar';
import Canvas3 from './Components/Canvas3';
import Canvas2 from './Components/Canvas2';
import Canvas from './Components/Canvas';
function App() {

  return (
    <div className="App">
      {/* <MyNavbar/>   */}
      <Canvas />
      <Canvas2 />
    </div>
  );
}

export default App;
