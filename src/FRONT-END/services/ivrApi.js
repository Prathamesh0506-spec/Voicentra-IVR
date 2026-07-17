import axios from "axios";

// Backend Base URL
const BASE_URL = "http://localhost:5000/api/ivr";


// New Call Start Karaychi
const startCall = async (callerNumber) => {

    const response = await axios.post(

        `${BASE_URL}/start-call`,

        {
            callerNumber
        }

    );

    return response.data;

};


// Dial Pad Input Pathvaycha
const sendDTMF = async (callId, digit) => {

    const response = await axios.post(

        `${BASE_URL}/dtmf`,

        {
            callId,
            digit
        }

    );

    return response.data;

};


// Current Call End Karaychi
const endCall = async (callId) => {

    const response = await axios.post(

        `${BASE_URL}/end-call`,

        {
            callId
        }

    );

    return response.data;

};


// Active Calls Ghayche
const getActiveCalls = async () => {

    const response = await axios.get(

        `${BASE_URL}/active-calls`

    );

    return response.data;

};


// Call History Ghaychi
const getCallHistory = async () => {

    const response = await axios.get(

        `${BASE_URL}/call-history`

    );

    return response.data;

};


export {

    startCall,

    sendDTMF,

    endCall,

    getActiveCalls,

    getCallHistory

};