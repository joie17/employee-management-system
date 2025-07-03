import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Usercontext from "./context/Usercontext.jsx"; // ✅ yeh import missing tha

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Usercontext>
        {" "}
        {/* ✅ wrap App in Usercontext */}
        <App />
      </Usercontext>
    </AuthProvider>
  </StrictMode>
);
