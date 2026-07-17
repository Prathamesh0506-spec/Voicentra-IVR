import "../CSS/CallLogs.css";

import { useEffect, useState } from "react";

import { getCallHistory } from "../services/ivrApi";

export default function CallLogs() {

    const [logs, setLogs] = useState([]);


    // Backend Madhun Call History Ghyaychi
    const loadCallHistory = async () => {

        try {

            const response = await getCallHistory();

            setLogs(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        loadCallHistory();

        // Dar 2 sec la Refresh
        const interval = setInterval(() => {

            loadCallHistory();

        }, 2000);

        return () => clearInterval(interval);

    }, []);


    return (

        <div className="card border-0 shadow-sm">

            <div className="card-header bg-dark text-white">

                <h5 className="mb-0">

                    Call Logs

                </h5>

            </div>

            <div className="card-body">

                {

                    logs.length === 0

                    ?

                    (

                        <p className="text-muted">

                            No Call History

                        </p>

                    )

                    :

                    (

                        logs.map((log, index) => (

                            <div

                                key={index}

                                className="border rounded p-3 mb-3"

                            >

                                <h6 className="mb-1">

                                    {log.callerNumber}

                                </h6>

                                <small className="text-muted d-block">

                                    Call ID : {log.callId}

                                </small>

                                <small className="text-muted d-block">

                                    Menu : {log.currentMenu}

                                </small>

                                <span className="badge bg-success mt-2">

                                    Completed

                                </span>

                            </div>

                        ))

                    )

                }

            </div>

        </div>

    );

}