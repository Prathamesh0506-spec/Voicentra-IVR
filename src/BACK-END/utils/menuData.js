const MENU = {

    main: {

        prompt: "Welcome to HarshAir. For quick access press:\n1 Booking\n2 Flight Status\n3 Baggage Help\n4 Refunds & Cancellations\n5 Seat Selection\n6 Loyalty & Miles\n7 Travel Advisory\n8 Feedback\n9 Talk to Agent",

        options: {

            "1": {
                action: "goto",
                target: "booking",
                message: "Booking selected. Redirecting to booking options."
            },

            "2": {
                action: "goto",
                target: "flightStatus",
                message: "Flight Status selected. We will ask for your PNR."
            },

            "3": {
                action: "goto",
                target: "baggage",
                message: "Baggage Help selected."
            },

            "4": {
                action: "goto",
                target: "refunds",
                message: "Refund & Cancellation selected."
            },

            "5": {
                action: "goto",
                target: "seat",
                message: "Seat Selection selected."
            },

            "6": {
                action: "goto",
                target: "loyalty",
                message: "Loyalty Program selected."
            },

            "7": {
                action: "goto",
                target: "advisory",
                message: "Travel Advisory selected."
            },

            "8": {
                action: "goto",
                target: "feedback",
                message: "Feedback selected."
            },

            "9": {
                action: "transfer",
                message: "Connecting to Customer Support."
            }

        }

    },

    booking: {

        prompt: "Booking - Press 1 New Booking, 2 Modify Booking, 3 Cancel Booking, 0 Back.",

        options: {

            "1": {

                action: "end",

                message: "New Booking Request Registered."

            },

            "2": {

                action: "end",

                message: "Modify Booking Request Registered."

            },

            "3": {

                action: "end",

                message: "Cancel Booking Request Registered."

            },

            "0": {

                action: "goto",

                target: "main",

                message: "Returning To Main Menu."

            }

        }

    },

    flightStatus: {

        prompt: "Please Enter Your 6 Digit PNR Followed By #",

        options: {

            "#": {

                action: "lookupPNR",

                message: "Checking Your PNR."

            }

        }

    },

    baggage: {

        prompt: "Press 1 Lost Item, 2 Excess Baggage Charges, 0 Back.",

        options: {

            "1": {

                action: "end",

                message: "Lost Item Complaint Registered."

            },

            "2": {

                action: "end",

                message: "Excess Baggage Information Sent."

            },

            "0": {

                action: "goto",

                target: "main",

                message: "Returning To Main Menu."

            }

        }

    },

    refunds: {

        prompt: "Press 1 Fare Rules, 2 Request Refund, 0 Back.",

        options: {

            "1": {

                action: "end",

                message: "Fare Rules Shared."

            },

            "2": {

                action: "end",

                message: "Refund Request Submitted."

            },

            "0": {

                action: "goto",

                target: "main",

                message: "Returning To Main Menu."

            }

        }

    },

    seat: {

        prompt: "Press 1 Aisle Seat, 2 Window Seat, 3 Extra Legroom, 0 Back.",

        options: {

            "1": {

                action: "end",

                message: "Aisle Seat Selected."

            },

            "2": {

                action: "end",

                message: "Window Seat Selected."

            },

            "3": {

                action: "end",

                message: "Extra Legroom Selected."

            },

            "0": {

                action: "goto",

                target: "main",

                message: "Returning To Main Menu."

            }

        }

    },

    loyalty: {

        prompt: "Press 1 Check Miles, 2 Redeem Miles, 0 Back.",

        options: {

            "1": {

                action: "end",

                message: "Miles Information Sent."

            },

            "2": {

                action: "end",

                message: "Redeem Request Registered."

            },

            "0": {

                action: "goto",

                target: "main",

                message: "Returning To Main Menu."

            }

        }

    },

    advisory: {

        prompt: "Press 1 Covid Rules, 2 Visa & Documents, 0 Back.",

        options: {

            "1": {

                action: "end",

                message: "Covid Guidelines Shared."

            },

            "2": {

                action: "end",

                message: "Visa Information Shared."

            },

            "0": {

                action: "goto",

                target: "main",

                message: "Returning To Main Menu."

            }

        }

    },

    feedback: {

        prompt: "Press 1 Rate 1-3, 2 Rate 4-5, 0 Back.",

        options: {

            "1": {

                action: "end",

                message: "Thank You For Your Feedback."

            },

            "2": {

                action: "end",

                message: "Thank You! Glad You Had A Great Experience."

            },

            "0": {

                action: "goto",

                target: "main",

                message: "Returning To Main Menu."

            }

        }

    }

};

export default MENU;