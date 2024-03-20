# JS WebRTC Video chat Project

WebRTC video chat project using `EJS, Express`, and `Socket.io` for real-time communication. Unique user IDs generated with `UUID` for secure connections. `Nodemon` ensures automatic server restarts during development. Collaborate seamlessly with peers in this simple yet powerful chat application.


## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/dev-dhanushkumar/JS-Small-Projects.git
   ```
2. Install the project dependencies using npm:
   ```sh
   npm install
   ```
3. Install PeerJS globally (if not already installed):
   ```sh
   npm i -g peer
   ```
---
## Running the Project

1. Start the PeerJS server on port 3001:
   ```sh
   peerjs --port 3001
   ```

2. Start the server using Nodemon:
   ```sh
   npm run devStart
   ```

3. Open your web browser and navigate to http://localhost:3000 to see the project in action.
---

## Dependencies
Make sure you have the following dependencies installed:
- [EJS](https://ejs.co/): Templating engine for generating HTML markup with JavaScript.
- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Socket.IO](https://socket.io/): Enables real-time, bidirectional and event-based communication.
- [UUID](https://www.npmjs.com/package/uuid): Generates unique identifiers for users and sessions.
- [Nodemon](https://nodemon.io/): Monitors changes in your source code and automatically restarts the server.
---