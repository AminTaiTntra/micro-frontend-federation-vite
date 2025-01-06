# Micro-Frontend POC with React and Module Federation (Vite)

This repository demonstrates a **Proof of Concept (POC)** for building a **Micro-Frontend Architecture** using the `vite-plugin-federation` package. The example consists of a **host** app and a **remote** app, showcasing how components can be shared dynamically at runtime.

## Features

- **Micro-Frontend Architecture**: Modularizing applications into independent apps for easier scaling and maintenance.
- **Runtime Component Sharing**: Sharing components between host and remote apps without bundling.
- **React + Vite**: Fast development and build using React and Vite.

## Folder Structure

```
├── host-app        # Host application
│   ├── src
│   └── vite.config.js
├── remote-app      # Remote application
│   ├── src
│   └── vite.config.js
└── README.md       # Project documentation
```

How It Works
Remote App:

Exposes components (e.g., Button) using vite-plugin-federation.
The vite.config.js file specifies the exposed modules.
```JavaScript
federation({
  name: "remote_app",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/Button.jsx",
  },
  shared: ["react", "react-dom"],
});
```
Host App:

Consumes components from the remote app using vite-plugin-federation.
The vite.config.js file specifies the remote app's entry point.
Example configuration:
```JavaScript
federation({
  name: "host_app",
  remotes: {
    remoteApp: "http://localhost:5001/assets/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
});
```
Example Usage

In the host app, you can import a remote component dynamically:

```JavaScript
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
```

Feel free to customize the file with more details specific to your project!


