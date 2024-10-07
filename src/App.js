import './App.css';
import React, { useState } from 'react';
import HooksUseState from './components/UseState';
import Student from './components/Props';
import UseEffectWithoutDependencies from './components/UseEffect/UseEffectWithoutDependencies';
import EmptyArray from './components/UseEffect/UseEffectWithAnEmptyArray';
import WithVariable from './components/UseEffect/UseEffectWithVariables';

function App() {

  // // useState()
  // const [counter, setCounter] = useState(0)
  // // let counter = 15

  // const addValue = () => {
  //   console.log(counter)
  //   setCounter(counter + 1)
  // }

  // const removeValue = () => {
  //   console.log(counter);
  //   setCounter(counter - 1)
  // }
  return (
    <div>
      <Student name="Veena" age={25} isStudent={true} />
      <Student name="Rasika" age={24} isStudent={false} />
      <Student name="Piyush" age={24} isStudent={false} />
      <HooksUseState />
      {'....'}
      <UseEffectWithoutDependencies/>
      {'...'}
      <EmptyArray/>
      {'...'}
      <WithVariable/>
      {/* Props....
      <div>
        <h1 className='text-2xl bg-red-500 p-3 rounded'>React</h1>
      </div>
      <div className='counter'>
        <h1>React Course {counter}</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add value</button> {' '}
        <button onClick={removeValue}>Remove value</button>
        <p>footer: {counter}</p>
      </div>
      <Student name="Veena" age={25} isStudent={true} />
      <Student name="Rasika" age={24} isStudent={true} />
      <Student name="Piyush" age={24} isStudent={false} /> */}
    </div>
  );
}

export default App;