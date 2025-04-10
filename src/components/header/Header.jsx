import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/header.css";
import TopPage from "../TopPage";
import PhraseCard from "../PhraseCard"; 
import OsakaTrivia from "../OsakaTrivia";

export const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-ul">
          <li className="header-li">
            <Link to="/">TOP</Link>
          </li>
          <li className="header-li">
            <Link to="/osaka-phrases">Osaka Phrase</Link>
          </li>
          <li className="header-li">
            <Link to="/osaka-trivia">Osaka Trivia</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};