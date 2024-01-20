import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import Card from "./components/Card";
import Confetti from "react-confetti";

function App() {
    const [theme, setTheme] = useState("student");
    const [isSignedUp, setIsSignedUp] = useState(false);

    const onSignUp = () => {
        localStorage.setItem("signedUp", "true");
        setIsSignedUp(true);
    };

    useEffect(() => {
        const signedUp = localStorage.getItem("signedUp") === "true";
        setIsSignedUp(signedUp);
    }, []);

    const themeChange = () => {
        setTheme(theme === "student" ? "engineer" : "student");
    };

    // array for Card keys
    const cardKeys = [0, 1, 2];

    return (
        <div id="app">
            {isSignedUp && <Confetti />}
            <Navbar isSignedUp={isSignedUp} onSignUp={onSignUp} curTheme={theme} onThemeChange={themeChange} />
            <MainText isSignedUp={isSignedUp} onSignUp={onSignUp} curTheme={theme} />
            <div className="w-full flex justify-around">
                {// Map over cardKeys to render Card components
                    cardKeys.map(key => (
                        <Card curTheme={theme} key={key} itemKey={key}/>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
