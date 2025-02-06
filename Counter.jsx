import { useState,useEffect } from "react";

export default function Counter() {
  
    // let [StateVariable,setStateVariable]=useState(0);
    let [count,setcount]=useState(0);

    let increaseCount=()=>{
       
        setcount(count+2);
        console.log(`"The count is rendered:",${count}`);
        
    }
useEffect(function SideEffect(){
  console.log("This is side-effect");
  
},[count])
    

  return (
    <div>
        <h2>count={count}</h2>
        <button onClick={increaseCount}>increase count</button>
    </div>
  );
    }
