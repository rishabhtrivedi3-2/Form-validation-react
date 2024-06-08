import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Signup from "./Signup";
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center bg-yellow-50 container-fluid sm:text-2xl">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
