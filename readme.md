# Micro-Frontend POC with React and Module Federation (Vite)

This repository demonstrates a **Proof of Concept (POC)** for building a **Micro-Frontend Architecture** using the `vite-plugin-federation` package. The example consists of a **host** app and a **remote** app, showcasing how components can be shared dynamically at runtime.

## Features

- **Micro-Frontend Architecture**: Modularizing applications into independent apps for easier scaling and maintenance.
- **Runtime Component Sharing**: Sharing components between host and remote apps without bundling.
- **React + Vite**: Fast development and build using React and Vite.

## Folder Structure

. ├── host-app # Host application │ ├── src │ └── vite.config.js ├── remote-app # Remote application │ ├── src │ └── vite.config.js └── README.md # Project documentation


## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>

Install Dependencies
Navigate to each app directory (host-app and remote-app) and install dependencies:

cd host-app
npm install

cd remote-app
npm install

Run the Applications
Start both apps in development mode:

1: Remote App:

bash
Copy code

By default, the remote app will run on http://localhost:5001.


2.Host App:

bash
Copy code

By default, the host app will run on http://localhost:3000

Access the Application
Open the host app in your browser at http://localhost:3000.
The host app dynamically fetches components from the remote app at runtime.

How It Works
Remote App:

Exposes components (e.g., Button) using vite-plugin-federation.
The vite.config.js file specifies the exposed modules.

federation({
  name: "remote_app",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/Button.jsx",
  },
  shared: ["react", "react-dom"],
});

Host App:

Consumes components from the remote app using vite-plugin-federation.
The vite.config.js file specifies the remote app's entry point.
Example configuration:
javascript
Copy code


federation({
  name: "host_app",
  remotes: {
    remoteApp: "http://localhost:5001/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
});

Example Usage

In the host app, you can import a remote component dynamically:

javascript
import React from "react";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));

function App() {
  return (
    <div>
      <h1>Host App</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RemoteButton />
      </React.Suspense>
    </div>
  );
}

export default App;

Key Packages
vite-plugin-federation: Enables module federation with Vite.
React: Library for building user interfaces.
Learn More
Module Federation: Webpack's Module Federation feature.
Vite: Next-generation frontend tool.

License
This project is licensed under the MIT License. See the LICENSE file for details.


Feel free to customize the file with more details specific to your project!


