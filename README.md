# 🚀 Voicentra – AI-Powered IVR Simulator

> A full-stack IVR simulation platform built using **React, Express.js, Node.js, and Bootstrap**, designed to demonstrate intelligent call routing, DTMF processing, and real-time session management.

---

# ✨ Features

- 📞 Interactive Dial Pad
- 🤖 AI-inspired IVR Menu Simulation
- 🎯 Real-Time Call Session Tracking
- 📋 Call History Management
- 🔢 DTMF Input Processing
- ⚡ REST API Based Communication
- 🏗 Modular MVC Backend Architecture

---

# 🛠 Tech Stack

### Frontend
- React.js
- Bootstrap
- Axios
- CSS3

### Backend
- Node.js
- Express.js

### Development Tools
- Git
- GitHub
- VS Code
- Postman

---

# 🏗 System Architecture

```text
                USER
                  │
                  ▼
        React Frontend (UI)
                  │
                  ▼
           API Service Layer
                  │
         HTTP Requests (REST)
                  │
                  ▼
      Express Backend Server
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
  Route Layer         Controller Layer
        │                   │
        └─────────┬─────────┘
                  ▼
          Service Layer (Logic)
                  │
                  ▼
         In-Memory Call Storage
                  │
                  ▼
          JSON Response → React
```

---

# 🔄 Complete Application Workflow

## 📞 Step 1 — User Starts a Call

```text
User
   │
   ▼
Enters Phone Number
   │
Clicks Start Call
   │
   ▼
React Frontend
```

### What Happens?

- User enters a phone number.
- React sends a request to the backend.
- Backend creates a brand-new call session.

---

## 🌐 Step 2 — API Communication

```text
React
   │
POST /start-call
   │
   ▼
ivrApi.js
   │
HTTP Request
   │
   ▼
Express Server
```

The **API Layer** acts as a bridge between the UI and the backend.

---

## ⚙ Step 3 — Request Processing

```text
Express Route
      │
      ▼
ivrController.js
      │
      ▼
ivrService.js
```

### Responsibilities

**Route**
- Receives incoming request

↓

**Controller**
- Validates request
- Extracts parameters

↓

**Service**
- Executes business logic
- Creates or updates IVR session

---

## 🧠 Step 4 — IVR Decision Engine

```text
ivrService.js
      │
      ▼
menuData.js
      │
      ▼
Determine Next Menu
```

The service checks the user's keypad input and decides:

- Which menu should appear next
- Which prompt should be returned
- Whether the call should continue
- Whether the session should end

---

## 🔢 Step 5 — DTMF Processing

```text
User Presses Key
        │
        ▼
React
        │
POST /dtmf
        │
        ▼
Backend
        │
        ▼
Service Layer
        │
        ▼
Update Session
```

Every keypad press updates the current IVR session.

---

## 📊 Step 6 — UI Update

```text
Backend
      │
JSON Response
      │
      ▼
React
      │
      ▼
Active Session
Call History
Prompt Display
```

The frontend instantly updates:

- Active Call
- Current Prompt
- Menu State
- Call History

---

# 🎯 Complete Request Journey

```text
                 USER
                   │
                   ▼
        React Frontend (Dial Pad)
                   │
        Start Call / Press Key
                   │
                   ▼
         ivrApi.js (API Layer)
                   │
          HTTP Request
                   │
                   ▼
      Express Routes (ivrRoutes.js)
                   │
                   ▼
   Controller (ivrController.js)
                   │
                   ▼
 Service Layer (ivrService.js)
       │          │          │
       ▼          ▼          ▼
Create Session  Process DTMF End Call
       │          │          │
       └──────────┼──────────┘
                  ▼
          menuData.js
          (IVR Decision Tree)
                  │
                  ▼
        JSON Response
                  │
                  ▼
 Active Session / Call History
```

---

# 📂 Project Structure

```text
src
│
├── FRONT-END
│   ├── LeftSection
│   ├── RightSection
│   ├── services
│   └── DisplayPage
│
└── BACK-END
    ├── routes
    ├── controllers
    ├── services
    ├── utils
    └── config
```

> Instead of listing every file, this structure highlights the major architectural layers.

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|:------:|-----------|-------------|
| **POST** | `/start-call` | Creates a new IVR session |
| **POST** | `/dtmf` | Processes keypad input |
| **POST** | `/end-call` | Ends the active call |
| **GET** | `/active-calls` | Returns all active sessions |
| **GET** | `/call-history` | Returns completed call history |

---

# 🔮 Future Enhancements

- 💾 MongoDB Integration
- ☁ Cloud Deployment
- ☎ Twilio Voice Calling
- 🎤 Speech-to-Text
- 🔐 JWT Authentication
- 📈 Call Analytics Dashboard
- 🤖 AI-Based Voice Responses

---

# 👨‍💻 Author

**Prathamesh**  
B.Tech Information Technology Student

---

## ⭐ If you found this project helpful, consider giving it a star!
