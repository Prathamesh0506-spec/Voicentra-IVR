import ActiveSession from "./ActiveSession";
import CallLogs from "./CallLogs";

import "../CSS/RightSection.css";

export default function RightSection() {

    return (

        <div className="right-section">

            <ActiveSession />

            <CallLogs />

        </div>

    );

}