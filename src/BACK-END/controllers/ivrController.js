import MENU from "../utils/menuData.js";

import {

    createSession,

    processDTMF,

    endSession,

    getActiveCalls,

    getCallHistory

} from "../services/ivrService.js";


// New Call Start Karaychi
const startCall = (request, response) => {

    const { callerNumber } = request.body;

    if (!callerNumber) {

        return response.status(400).json({

            success: false,

            message: "Caller Number Is Required"

        });

    }

    const session = createSession(callerNumber);

    response.status(201).json({

        success: true,

        message: "Call Started Successfully",

        data: {

            callId: session.callId,

            currentMenu: session.currentMenu,

            prompt: MENU.main.prompt

        }

    });

};


// User cha Input Process Karaycha
const handleDTMF = (request, response) => {

    const { callId, digit } = request.body;

    if (!callId || !digit) {

        return response.status(400).json({

            success: false,

            message: "Call Id And Digit Are Required"

        });

    }

    const result = processDTMF(callId, digit);

    response.status(200).json(result);

};


// Current Call End Karaychi
const endCall = (request, response) => {

    const { callId } = request.body;

    if (!callId) {

        return response.status(400).json({

            success: false,

            message: "Call Id Is Required"

        });

    }

    const session = endSession(callId);

    if (!session) {

        return response.status(404).json({

            success: false,

            message: "Session Not Found"

        });

    }

    response.status(200).json({

        success: true,

        message: "Call Ended Successfully",

        data: session

    });

};


// Active Calls Return Karayche
const activeCalls = (request, response) => {

    response.status(200).json({

        success: true,

        count: Object.keys(getActiveCalls()).length,

        data: getActiveCalls()

    });

};


// Completed Calls Return Karayche
const callHistory = (request, response) => {

    const history = getCallHistory();

    response.status(200).json({

        success: true,

        count: history.length,

        data: history

    });

};


export {

    startCall,

    handleDTMF,

    endCall,

    activeCalls,

    callHistory

};