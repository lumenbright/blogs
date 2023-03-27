import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
import { BlogFeed, CreateBlog, LogIn, LogOut, Profile, SignUp, UpdateBlog } from "./pages";
import NavBar from "./components/NavBar";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="bg-light d-flex flex-column justify-content-center align-items-center min-vh-100" style={{ paddingTop: "70px" }}>
        <Routes>
          <Route path="/" element={ <BlogFeed /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/login" element={ <LogIn /> } />
          <Route path="/logout" element={ <LogOut /> } />
          <Route path="/feed" element={ <BlogFeed /> } />
          <Route path="/create" element={ <CreateBlog /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/admin" element={ <Admin /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
