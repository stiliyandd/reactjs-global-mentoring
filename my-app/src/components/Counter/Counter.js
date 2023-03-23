import { React, useState, useRef } from 'react';
 
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const inputRef = useRef(null);
 
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  const decrease = () => {
    setCounter(count => count - 1);
  };

  const setValue = () => setCounter(parseInt(inputRef.current.value));
 
  return (
    <div className="counter">
      <h1>Counter</h1>
      <input className="counter__output" onChange={setValue} ref={inputRef} name="number" type="number" value={counter}/>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
      </div>
    </div>
  );
}
