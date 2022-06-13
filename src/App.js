import './App.css';
import { useSelector,useDispatch } from "react-redux";
import {  decrementCounter, incrementCounter } from './js/actions/actionCounter';


function App() {
  const counter= useSelector((state)=>state.counter)
  console.log(counter)
  const dispatch=useDispatch()
  return (
    <div className="App">
<button onClick={()=>dispatch(incrementCounter())}>+</button>
<p>{counter}</p>
<button onClick={()=>dispatch(decrementCounter())} >-</button>
    </div>
  );
}

export default App;
