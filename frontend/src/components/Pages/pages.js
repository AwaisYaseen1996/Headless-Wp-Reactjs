import "./assets/fontFace.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../common/Navbar";
import Home from "./Home";
import Posts from "./Posts";
import Single from "./Single";
import Login from "./Login";
import AddPost from "./AddPost";

function pages() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </>
  );
}

export default pages;
