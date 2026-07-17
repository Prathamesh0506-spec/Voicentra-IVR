import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

// Environment madhun PORT ghaycha
const PORT = process.env.PORT || 5000;

// Server Start Karaycha
app.listen(PORT, () => {

    console.log("======================================");

    console.log(`🚀 Server Running Successfully`);

    console.log(`🌐 http://localhost:${PORT}`);

    console.log(`📦 Environment : ${process.env.NODE_ENV || "development"}`);

    console.log("======================================");

});