import "../CSS/LeftSection.css";

import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdCallEnd } from "react-icons/md";
import { IoMic } from "react-icons/io5";
import { IoBackspace } from "react-icons/io5";

import {

    startCall,

    sendDTMF,

    endCall

} from "../services/ivrApi";


export default function LeftSection() {

    const [phoneNumber, setPhoneNumber] = useState("");

const [callId, setCallId] = useState("");

const [currentPrompt, setCurrentPrompt] = useState("");

const [callStatus, setCallStatus] = useState("Idle");

    const dialPad = [
        ["1", ""], ["2", "ABC"], ["3", "DEF"],
        ["4", "GHI"], ["5", "JKL"], ["6", "MNO"],
        ["7", "PQRS"], ["8", "TUV"], ["9", "WXYZ"],
        ["*", ""], ["0", "+"], ["#", ""]
    ];

  const handleClick = async (value) => {

    // Call Start zhala nasel tar Number Type Karaycha
    if (callId === "") {

        setPhoneNumber((previous) => previous + value);

        return;

    }

    // Call Start zhalyavar DTMF Pathvaycha
    try {

        const response = await sendDTMF(

            callId,

            value

        );
const { data } = await sendDTMF(callId, value);

if (data.prompt) {

    setCurrentPrompt(data.prompt);

}

        }

    }

    catch (error) {

        console.log(error);

    }

};

const handleDelete = () => {

    if (callId !== "") {

        return;

    }

    setPhoneNumber((previous) => previous.slice(0, -1));

};


  const handleStartCall = async () => {

    try {
const { data } = await startCall(phoneNumber);

setCallId(data.callId);

setCurrentPrompt(data.prompt);

    }

    catch (error) {

        console.log(error);

    }

};


const handleEndCall = async () => {

    try {

        await endCall(callId);

        setCallId("");

        setCallStatus("Ended");

        setCurrentPrompt("");

        setPhoneNumber("");
    }

    catch (error) {

        console.log(error);

    }

};

const handleSpeak = () => {

    const SpeechRecognition =

        window.SpeechRecognition ||

        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        alert("Speech Recognition is not supported.");

        return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    recognition.onresult = (event) => {

        const speech = event.results[0][0].transcript;

        console.log(speech);

        setPhoneNumber(speech);

    };

};

return (

    <div className="left-section">

        <div className="card border-0 shadow-lg dialer-card">

            <div className="text-center mb-4">

                <h3 className="fw-bold text-white">

                    AI Voice Assistant

                </h3>

                <p className="text-secondary mb-0">

                    Intelligent IVR Console

                </p>

            </div>

            <div className="text-center mb-4">

                <h1 className="display-number">

                    {

                        number === ""

                        ?

                        "+1 336 936 4011"

                        :

                        number

                    }

                </h1>

            </div>

            <div className="mb-4">

                <input

                    type="text"

                    className="form-control number-input"

                    placeholder="Enter Number..."

                    value={number}

                    readOnly

                />

            </div>

            <div className="container-fluid p-0">

                <div className="row g-3">
                    {

    dialPad.map((button, index) => (

        <div
            className="col-4"
            key={index}
        >

            <button
                className="btn dial-btn w-100"
                onClick={() => handleClick(button[0])}
            >

                <div className="dial-number">

                    {button[0]}

                </div>

                <div className="dial-text">

                    {button[1]}

                </div>

            </button>

        </div>

    ))

}

                </div>

            </div>

            <div className="d-grid gap-3 mt-4">

                <button

    className="btn btn-success btn-lg rounded-pill"

    onClick={handleStartCall}

/>
                <button className="btn btn-primary btn-lg rounded-pill">

                    <IoMic className="me-2" />

                    Speak

                </button>

                <div className="d-flex gap-3">

                    <button
                        className="btn btn-outline-light flex-fill rounded-pill"
                        onClick={handleDelete}
                    >

                        <IoBackspace className="me-2" />

                        Delete

                    </button>
<button

    className="btn btn-danger flex-fill rounded-pill"

    onClick={handleEndCall}

/>

                </div>

            </div>

            <div className="card bg-dark border-0 mt-4">

                <div className="card-body py-3">

                    <small className="text-success d-block">

                        ● Backend Connected

                    </small>

                    <small className="text-info d-block mt-2">

                        ● Microphone Ready

                    </small>

     <small className="text-warning d-block mt-2">

    ● Session {callStatus}

</small>

{
    currentPrompt !== "" && (

        <small className="text-white d-block mt-3">

            {currentPrompt}

        </small>

    )
}
                </div>

            </div>

        </div>

    </div>

);

}