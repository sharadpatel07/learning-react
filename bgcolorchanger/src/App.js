import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState("white");

  return (
    <>
    <div className='main' style={{backgroundColor:`${color}`}}>
      <div className='container m-2'>
        <button className="red" onClick={()=>setColor("red")}>red</button>
        <button className="blue" onClick={()=>setColor("blue")}>blue</button>
        <button className="orange" onClick={()=>setColor("orange")}>orange</button>
        <button className="yellow" onClick={()=>setColor("yellow")}>yellow</button>
        <button className="green" onClick={()=>setColor("green")}>green</button>
        <button className="black" onClick={()=>setColor("black")}>black</button>
        <button className="white" onClick={()=>setColor("white")}>white</button>
        <button className="brown" onClick={()=>setColor("brown")}>brown</button>
        <button className="purple" onClick={()=>setColor("purple")}>purple</button>
        <button className="pink" onClick={()=>setColor('pink')}>pink</button>
      </div>
    </div>
    </>
  );
}

export default App;
