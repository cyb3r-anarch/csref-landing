import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainText from "./components/MainText";
import Card from "./components/Card";
import data from "./utils/data.json";
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

    // card content

    // Safely access the first 'student' object's features, if it exists
    const studentFeatures = data.find(obj => obj.student)?.student.features ?? [];

    // Safely access the first 'engineer' object's features, if it exists
    const engineerFeatures = data.find(obj => obj.engineer)?.engineer.features ?? [];

    // Now, you can safely access the descriptions with checks
    const studentTitle1 = studentFeatures[0]?.title;
    const studentTitle2 = studentFeatures[1]?.title;
    const studentTitle3 = studentFeatures[2]?.title;
    const studentDescription1 = studentFeatures[0]?.description;
    const studentDescription2 = studentFeatures[1]?.description;
    const studentDescription3 = studentFeatures[2]?.description;

    const engineerTitle1 = engineerFeatures[0]?.title;
    const engineerTitle2 = engineerFeatures[1]?.title;
    const engineerTitle3 = engineerFeatures[2]?.title;
    const engineerDescription1 = engineerFeatures[0]?.description;
    const engineerDescription2 = engineerFeatures[1]?.description;
    const engineerDescription3 = engineerFeatures[2]?.description;



    return (
        <div id="app">
            {isSignedUp && <Confetti/>}
            <Navbar isSignedUp={isSignedUp} onSignUp={onSignUp} curTheme={theme} onThemeChange={themeChange} />
            <MainText isSignedUp={isSignedUp} onSignUp={onSignUp} curTheme={theme} />
            {theme === "student" && (
                <div className="w-full flex justify-around ">
                    <Card
                        title={studentTitle1}
                        description={studentDescription1}
                    />
                    <Card
                        title={studentTitle2}
                        description={studentDescription2}
                    />
                    <Card
                        title={studentTitle3}
                        description={studentDescription3}
                    />
                </div>
            )}
            {theme === "engineer" && (
                <div className="w-full flex justify-around ">
                    <Card
                        title={engineerTitle1}
                        description={engineerDescription1}
                    />
                    <Card
                        title={engineerTitle2}
                        description={engineerDescription2}
                    />
                    <Card
                        title={engineerTitle3}
                        description={engineerDescription3}
                    />
                </div>
            )}
        </div>
    );
}

export default App;