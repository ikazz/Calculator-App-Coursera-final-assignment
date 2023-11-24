 
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 

  function minus(e) {
    e.preventDefault();
    setResult((reslult) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult( (result) => result * Number(inputRef.current.value));
  }
 
  function divide(e) { 
    e.preventDefault();
    setResult( (result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	resultRef.current.value = 0;
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 



// function App() {

//   return (
//     <div className="App">
//       <h1>Where should the state go?</h1>
//       <FruitsProvider>
//         <Fruits />
//         <FruitsCounter />
//       </FruitsProvider>
//     </div>
//   );
// }

// export default App;
