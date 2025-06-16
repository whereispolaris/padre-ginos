import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";

// delete the Pizza component

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Padre Gino's Pizza – , Order Now</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
