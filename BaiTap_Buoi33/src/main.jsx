import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import Header from "./components/Header.jsx";
import Body from "./components/body.jsx";
import Content from "./components/content.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Body />
    <Content />
    {/* <App /> */}
  </StrictMode>
);
