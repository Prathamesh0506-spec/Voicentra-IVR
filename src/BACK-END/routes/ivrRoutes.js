import express from "express";

import {

    startCall,

    handleDTMF,

    endCall,

    activeCalls,

    callHistory

} from "../controllers/ivrController.js";

const router = express.Router();

// New Call Start Karaychi
router.post("/start-call", startCall);

// User cha DTMF Process Karaycha
router.post("/dtmf", handleDTMF);

// Current Call End Karaychi
router.post("/end-call", endCall);

// Active Sessions Baghayla
router.get("/active-calls", activeCalls);

// Completed Calls Baghayla
router.get("/call-history", callHistory);

export default router;