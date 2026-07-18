import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

function getBasename() {
  const hostname = window.location.hostname;
  if (hostname === "yangyelawyer.com" || hostname === "www.yangyelawyer.com") {
    return "/";
  }
  return "/yangyelawyer/";
}

export default function App() {
  return (
    <Router basename={getBasename()}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
