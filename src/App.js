import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import { BlogFeed, CreateBlog, Login, SignUp, UpdateBlog } from "./pages";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="bg-light min-vh-100" style={{ paddingTop: "70px" }}>
        
        <Login />
        <SignUp />
        <CreateBlog />
        <UpdateBlog />
        <BlogFeed />

      </div>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/signup" element={""} />
        <Route path="/login" element={""} />
        <Route path="/logout" element={""} />
        <Route path="/feed" element={""} />
        <Route path="/create" element={""} />
        <Route path="/profile" element={""} />
        <Route path="/admin" element={""} />
      </Routes>
    </Router>
  );
}

export default App;
