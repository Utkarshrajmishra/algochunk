import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import ProblemList from "./pages/ProblemList";

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Login/>} />
      <Route path="/problem-list"  element={<ProtectedRoute><ProblemList/></ProtectedRoute>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
