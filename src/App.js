import { useState } from 'react';
import './App.css';

/* function Person(props) {
  return (
    <>
      <div className='name'>Name: {props.name}</div>
      <div className='surname'>Surname: {props.surname}</div>
      <div className='age'>age: {props.age}</div>
    </>
  )
} */


function App() {
  const [counter, setCounter] = useState(0);
  //const name = 'sam';
  console.log(setCounter)
  const minus = function() {
    setCounter(
      (prevCount) => prevCount - 2
    )
  }
  const plus = function() {
    setCounter(
      (prevCount) => prevCount + 4
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>sdasd {name}</h1> */}
        {/* <Person name="Samandar" surname="Ruziev" age="19" /> */}
        <button onClick={minus}>-</button>
        <h1>{counter}</h1>
        <button onClick={plus}>+</button>
      </header>
    </div>
  );
}

export default App;
