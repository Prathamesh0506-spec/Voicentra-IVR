import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import ivrRoutes from "./routes/ivrRoutes.js";

dotenv.config();

const app = express();

// JSON Data Accept Karayla
app.use(express.json());

// Form Data Accept Karayla
app.use(express.urlencoded({ extended: true }));

// Frontend Connect Karayla
app.use(cors());

// Backend Running Check Karayla
app.get("/", (request, response) => {

    response.status(200).json({

        success: true,

        message: "AI Enabled Conversational IVR Backend Running"

    });

});

// IVR Routes
app.use("/api/ivr", ivrRoutes);

// Wrong Route Handle Karayla
app.use("*", (request, response) => {

    response.status(404).json({

        success: false,

        message: "Route Not Found"

    });

});

export default app;