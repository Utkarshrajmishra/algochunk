import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProblemList from "./pages/ProblemList";
import Problem from "./pages/Problem";
import Home from "./pages/home";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<ProblemList/>} />
          <Route path="/problem" element={<Problem />} />
        </Routes>
      </Router> */}
      <Home/>
    </>
  );
}

export default App;
