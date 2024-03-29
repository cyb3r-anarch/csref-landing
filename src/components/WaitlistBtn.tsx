import React, { useState } from "react";
import { createPortal } from "react-dom";
import WaitlistModal from "./WaitlistModal";
import checkMark from "../assets/checkMark.png"

interface WaitlistBtnProps {
    curTheme: string;
    text: string;
    isSignedUp: boolean;
    onSignUp: () => void;
}

function WaitlistBtn({ curTheme, text, isSignedUp, onSignUp }: WaitlistBtnProps) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        const modalElement = document.querySelector(".modal");

        if (!modalElement) {
            // If element with class 'modal' does not exist, show the modal
            setShowModal(true);
        }
        // Otherwise, do nothing (optional: show a message, log, etc.)
    };

    const closeSignUpModal = () => {
        const modal = document.getElementsByClassName("slit-in-vertical")[0];
        modal.classList.remove("slit-in-vertical");
        modal.classList.add("slit-out-vertical");
        setTimeout(() => {
            setShowModal(false);
        }, 600);
    };

    // changes button background color
    const bgColor = curTheme==="engineer" ? "bg-sky-600" : "bg-green-500";
    const bgHover = curTheme==="engineer" ? "hover:bg-cyan-500" : "hover:bg-green-400";

    return (
        <>
            {!isSignedUp ? (
                <button onClick={openModal} className={`text-white font-bold py-2 px-4 rounded-sm fade-in ${bgColor} ${bgHover}`}>
                    {text}
                </button>
            ) : (
                <div className="flex flex-row items-center gap-x-2">
                    <p>Thanks for signing up!</p>
                    <img className="size-5" src={checkMark} alt="checkmark"/>
                </div>
            )}
            {showModal && createPortal(
                <WaitlistModal onSignUp={onSignUp} onClose={() => closeSignUpModal()} curTheme={curTheme}/>, document.body
            )}
        </>
    );
}

export default WaitlistBtn;