import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/profile.png"; 
import "../css/topPage.css";

export default function TopPage() {
  return (
    <div className="top-container">
      <img
        src={ProfileImage} 
        alt="Profile"
        className="profile-image"
      />
      <h1 className="main-title">ALL ABOUT OSAKA</h1>
      <p className="description">Welcome to Osaka Language & Culture App</p>
      <div className="link-button-group">
        <Link
          to="/osaka-phrases"
          className="link-button"
        >
          🗣 Osaka Dialect Phrases
        </Link>
        <Link
          to="/osaka-trivia"
          className="link-button link-button-green"
        >
          🧠 Osaka Trivia
        </Link>
      </div>
    </div>
  );
}