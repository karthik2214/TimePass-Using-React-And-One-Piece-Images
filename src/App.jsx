import React,{ useState } from "react";
import img from "./onepiece.jpg"
import img2 from "./one_piece.jpg"

const App = () => {
  
  const [count, setCount] = useState(0);
  
  const incNum = () => {
    setCount(count + 1);
  }
  
  const decNum = () => {
    if(count > 0){
    setCount(count - 1);
    }else{
      setCount(0);
      alert("Zero Is The Limit");
    }
  }
  
  
  return (
    <>
    <h1> {count} </h1>
    <button onClick={incNum}>Inc Num</button>
    <button onClick={decNum}> Dec Num </button>
<div className="img">
<img src={img} alt="img"/>
<img src={img2} alt="img"/>

</div>
    </>
    )
}

export default App;
