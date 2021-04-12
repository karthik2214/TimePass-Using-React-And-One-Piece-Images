import React,{ useState } from "react";
import img from "./onepiece.jpg"
import img2 from "./one_piece.jpg"

const App = () => {
  const state = useState();
  
  const [count, setCount] = useState(0);
  
  const incNum = () => {
    setCount(count + 1);
  }
  
  
  
  return (
    <>
    <h1> {count} </h1>
    <button onClick={incNum}> Click me</button>

<div className="img">
<img src={img} alt="img"/>
<img src={img2} alt="img"/>

</div>
    </>
    )
}

export default App;