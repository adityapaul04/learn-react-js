import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="h-screen w-screen" style={{backgroundColor: color}}>
        <h1 className='text-white text-center '>Background Color Changer</h1>
        <div className="absolute bottom-5 bg-slate-500 rounded-xl p-5 flex gap-3 justify-center items-center inset-x-0">
          <button className='text-white rounded-xl p-5 bg-red-500' onClick={() => setColor("red")}>RED</button>
          <button className='text-white rounded-xl p-5 bg-blue-500' onClick={() => setColor("blue")}>BLUE</button>
          <button className='text-white rounded-xl p-5 bg-green-500' onClick={() => setColor("green")}>GREEN</button>
          <button className='text-white rounded-xl p-5 bg-yellow-500' onClick={() => setColor("yellow")}>YELLOW</button>
          <button className='text-white rounded-xl p-5 bg-cyan-500' onClick={() => setColor("cyan")}>CYAN</button>
          <button className='text-white rounded-xl p-5 bg-purple-500' onClick={() => setColor("purple")}>PURPLE</button>

        </div>
      </div>
    </>
  );
}

export default App;
