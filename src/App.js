import React,{useState} from 'react';
import './style.css';


function App(){
const [input, setInput] = useState("");
const calcBtns = [];
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."].forEach((item) => {
  calcBtns.push(
    <button
      onClick={(e) => {
        setInput(input + e.target.value);
      }}
      value={item}
      key={item}
    >
      {item}
    </button>
  );
});
return (
  <div className="wrapper">
    <div className="input">{input}</div>
    <div className="digits flex">{calcBtns}</div>
    <div className="modifiers subgrid">
      <button onClick={() => setInput("")} value="">
        C
      </button>
    </div>
    <div className="operations subgrid">
      <button onClick={(e) => setInput(input + e.target.value)} value="+">
        +
      </button>    
      <button onClick={(e) => setInput(input + e.target.value)} value="-">
        -
      </button>
      <button onClick={(e) => setInput(input + e.target.value)} value="*">
         *
      </button>
      <button onClick={(e) => setInput(input + e.target.value)} value="/">
        /
      </button>
      
      <button
        onClick={(e) => {
          try {
            setInput(
              String(eval(input)).length > 3 &&
                String(eval(input)).includes(".")
                ? String(eval(input).toFixed(4))
                : String(eval(input))
            );
          } catch (e) {
            console.log(e);
          }
        }}
        value="="
      >
        =
      </button>
    </div>
  </div>
);
}

export default App;