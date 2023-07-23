import { useState, useEffect } from "react";

const User = () =>{
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const isTokenSet = localStorage.getItem("token")
        setIsLoggedIn(isTokenSet)
        document.title = isTokenSet ? "Welcome User!" :"Please Log In"
    },[isLoggedIn]);

    const handleLogin = () =>{
        setIsLoggedIn(isLoggedIn => {
            localStorage.setItem("token",true);
            return (isLoggedIn, true);
        });
    };
    const handleLogout = () =>{
        localStorage.removeItem("demo-token");
        setIsLoggedIn(isLoggedIn => {
            return (isLoggedIn, false);
        });
    }

    return ( 
    <div id="User">
        <h2 className="login"> {isLoggedIn ? "Welcome User!" :  "Please Login" }</h2>
        {
            isLoggedIn
            ?
            <button onClick={handleLogout}>Log Out</button>
            :
            <button onClick={handleLogin}>Log In</button>
        }
    </div>
    );
}

export default User;