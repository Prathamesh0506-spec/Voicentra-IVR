import "../CSS/ActiveSession.css";

import { useEffect, useState } from "react";

import { getActiveCalls } from "../services/ivrApi";

export default function ActiveSession() {

    const [sessions, setSessions] = useState({});


    // Backend Madhun Active Sessions Ghaychya
    const loadActiveSessions = async () => {

        try {

            const response = await getActiveCalls();

            setSessions(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        loadActiveSessions();

        // Dar 2 sec la Refresh Karaycha
        const interval = setInterval(() => {

            loadActiveSessions();

        }, 2000);

        return () => clearInterval(interval);

    }, []);


    return (

        <div className="active-session">

            <div className="card shadow-sm border-0">

                <div className="card-body">

                    <h4 className="mb-4">

                        Active Sessions

                    </h4>

                    {

                        Object.keys(sessions).length === 0

                        ?

                        (

                            <p className="text-muted">

                                No Active Session

                            </p>

                        )

                        :

                        (

                            Object.values(sessions).map((session) => (

                                <div

                                    key={session.callId}

                                    className="border rounded p-3 mb-3"

                                >

                                    <h6>

                                        {session.callId}

                                    </h6>

                                    <p className="mb-1">

                                        <strong>Caller : </strong>

                                        {session.callerNumber}

                                    </p>

                                    <p className="mb-1">

                                        <strong>Current Menu : </strong>

                                        {session.currentMenu}

                                    </p>

                                    <p className="mb-0">

                                        <strong>Status : </strong>

                                        Active

                                    </p>

                                </div>

                            ))

                        )

                    }

                </div>

            </div>

        </div>

    );

}