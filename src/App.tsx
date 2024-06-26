import "./App.css";
import Navbar from "./components/Navbar/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Playground from "./pages/Playgroud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Problem from "./pages/Problem";
import ProblemList from "./pages/ProblemList";
import CommunityPage from "./pages/Community";
import React_Editor from "./pages/React_Editor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="problem"
          element={
            <ProtectedRoute>
              <Problem />
            </ProtectedRoute>
          }
        />

       
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />

           <Route 
          path="playground/react-editor"
          element={<React_Editor/>}
          />


          <Route
            path="problem-list"
            element={
              <ProtectedRoute>
                <ProblemList />
              </ProtectedRoute>
            }
          />
          <Route path="/playground" element={<Playground />} />

          < Route path="/community-section" element={
            <ProtectedRoute>
              <CommunityPage/>
            </ProtectedRoute>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
