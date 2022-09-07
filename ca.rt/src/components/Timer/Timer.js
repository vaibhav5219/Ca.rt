import { useState, useEffect } from "react";

const Timer = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            setCounter(previousValueOfCounter => previousValueOfCounter+1);
        }, 1000);

        return () => {  // It will execute 1st re-render 
            console.log("Timer Component Rerendered");
            clearInterval(timeInterval);    // If we will not use memory leak will happen
        }
    },[]);    //   [counter]

    return (
        <div >
            <h3>{counter} Seconds</h3>
        </div>
    )
}










export default Timer;