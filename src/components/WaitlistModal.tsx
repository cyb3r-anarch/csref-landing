import React, { FormEvent, useState } from "react";
import data from "../utils/data.json";
import "./Popup.css"; // Import your CSS file for styling

interface WaitlistModalProps {
    curTheme: string;
    onClose: () => void;
    onSignUp: () => void;
}

function WaitlistModal({ curTheme, onClose, onSignUp }: WaitlistModalProps) {
    const themeObject = data.find((obj) => obj[curTheme]);
    const text = themeObject[curTheme].waitlistModalText;

    const [email, setEmail] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/addToList", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email }),
        })
            .then((response) => {
                onSignUp();
                console.log(response);
            })
            .catch(() => {
                console.log("error");
            })
            .finally(() => {
                onClose();
            });
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-gray-800 bg-opacity-50 w-full h-full absolute z-10"></div>
            <div className="bg-sky-950 p-6 rounded max-w-96 shadow-md z-20 flex flex-col border-2 border-slate-500 relative slit-in-vertical">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-3 text-white text-xl cursor-pointer focus:outline-none"
                >
                    &times;
                </button>
                <form onSubmit={onSubmit} className="space-y-4">
                    <h2
                        className="text-md text-center mb-4 leading-10"
                        dangerouslySetInnerHTML={{ __html: text }}
                    ></h2>
                    <input
                        className="block w-full text-center text-black mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="flex justify-center space-x-2 w-full">
                        <button
                            type="submit"
                            className="mt-2 px-4 py-2 bg-blue-500 font-bold text-white rounded hover:bg-blue-600 w-full focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default WaitlistModal;
