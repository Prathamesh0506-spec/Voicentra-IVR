import MENU from "../utils/menuData.js";

// Active Calls Store Karaycha
const activeCalls = {};

// Completed Calls Store Karaycha
const callHistory = [];


// Random Call Id Generate Karaycha
const generateCallId = () => {

    return `CALL_${Math.floor(100000 + Math.random() * 900000)}`;

};


// New Session Create Karaychi
const createSession = (callerNumber) => {

    const callId = generateCallId();

    activeCalls[callId] = {

        callId,

        callerNumber,

        startTime: new Date(),

        currentMenu: "main",

        menuPath: ["main"],

        inputs: [],

        pnrBuffer: ""

    };

    return activeCalls[callId];

};


// Current Active Session Ghaychi
const getSession = (callId) => {

    return activeCalls[callId];

};


// Active Session Delete Karaychi
const endSession = (callId) => {

    const session = activeCalls[callId];

    if (!session) {

        return null;

    }

    session.endTime = new Date();

    callHistory.push(session);

    delete activeCalls[callId];

    return session;

};


// Active Calls Return Karayche
const getActiveCalls = () => {

    return activeCalls;

};


// Call History Return Karaychi
const getCallHistory = () => {

    return callHistory;

};


// Menu Return Karaycha
const getMenu = (menuName) => {

    return MENU[menuName];

};


// User cha DTMF Input Process Karaycha
const processDTMF = (callId, digit) => {

    const session = activeCalls[callId];

    if (!session) {

        return {

            success: false,

            message: "Session Not Found"

        };

    }

    session.inputs.push(digit);

    const currentMenu = MENU[session.currentMenu];

    if (!currentMenu) {

        return {

            success: false,

            message: "Menu Not Found"

        };

    }

    // Flight Status Sathi PNR Collect Karaycha
    if (session.currentMenu === "flightStatus" && digit !== "#") {

        if (!Number.isNaN(Number(digit))) {

            session.pnrBuffer += digit;

            if (session.pnrBuffer.length < 6) {

                return {

                    success: true,

                    status: "collecting",

                    prompt: "Digit Received. Enter Remaining Digits.",

                    collected: session.pnrBuffer

                };

            }

            return {

                success: true,

                status: "collecting",

                prompt: "Press # To Confirm Your PNR.",

                collected: session.pnrBuffer

            };

        }

        return {

            success: false,

            status: "invalid",

            prompt: "Please Enter Valid Digits."

        };

    }

    const option = currentMenu.options[digit];

    if (!option) {

        return {

            success: false,

            status: "invalid",

            prompt: "Invalid Option. Please Try Again."

        };

    }

    // Next Menu Madhe Jaycha
    if (option.action === "goto") {

        session.currentMenu = option.target;

        session.menuPath.push(option.target);

        return {

            success: true,

            status: "processed",

            message: option.message,

            currentMenu: option.target,

            prompt: MENU[option.target].prompt

        };

    }

    // Call End Karaycha
    if (option.action === "end") {

        endSession(callId);

        return {

            success: true,

            status: "callEnded",

            message: option.message

        };

    }

    // Agent Transfer
    if (option.action === "transfer") {

        endSession(callId);

        return {

            success: true,

            status: "transfer",

            message: option.message

        };

    }

    // PNR Lookup
    if (option.action === "lookupPNR") {

        if (session.pnrBuffer.length === 6) {

            const pnrDetails = {

                pnr: session.pnrBuffer,

                flight: "HS123",

                status: "Confirmed",

                route: "Pune → Mumbai"

            };

            endSession(callId);

            return {

                success: true,

                status: "pnrFound",

                message: `PNR ${pnrDetails.pnr} Confirmed`,

                data: pnrDetails

            };

        }

        session.pnrBuffer = "";

        endSession(callId);

        return {

            success: false,

            status: "invalidPNR",

            message: "Incomplete PNR"

        };

    }

    return {

        success: false,

        message: "Unhandled Request"

    };

};



export {

    createSession,

    getSession,

    endSession,

    getActiveCalls,

    getCallHistory,

    getMenu,
    
    processDTMF

};