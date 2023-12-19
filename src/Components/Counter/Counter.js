import React, { useState } from 'react'

function Counter() {
    let [counter , setCounter] = useState(0);

    function addValue() {
        counter = counter + 1;
        setCounter(counter);
    }
    function removeValue(){
        counter !== 0 ? counter = counter -1 : counter = 0;
        setCounter(counter);
    }
    function resetCount(){
        counter = 0;
        setCounter(counter)
    }
  return (
    <>
        <div style={{textAlign: 'center'}}>
            <h1>{counter}</h1>
            <button style={{padding: '4px 8px', margin: '0 5px'}} onClick={removeValue}>Decrease</button>
            <button style={{padding: '4px 8px', margin: '0 5px'}} onClick={resetCount}>Reset</button>
            <button style={{padding: '4px 8px', margin: '0 5px'}} onClick={addValue}>Increase</button>
        </div>
    </>
  )
}

export default Counter