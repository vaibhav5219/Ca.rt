import { useState, useEffect } from "react";

const Timer = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setCounter(counter => counter+1);
        }, 1000);
    },[]);

    return (
        <div >
            <h3>{counter} Seconds</h3>
        </div>
    )
}










export default Timer;