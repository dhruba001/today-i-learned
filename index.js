import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <img src="gs_logo.png" alt="logo" />
    </header>
  );
}

function Middle() {
  return (
    <Middle>
      <img src="car_charging_first_page.png" alt="car" />
    </Middle>
  );
}

function Footer() {
  return (
    <Footer>
      <h1>click here to continue</h1>
    </Footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
