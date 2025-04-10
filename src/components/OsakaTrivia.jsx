import React, { useState } from "react";

import { Header } from "./header/Header";
import "../css/osakaTrivia.css";

const facts = [
  {
    title: "Kuidaore no Machi",
    content:
      "Osaka is known as 'The City of Eating Until You Drop' because people would spend all their money on delicious food.",
  },
  {
    title: "Maido! - A Versatile Greeting",
    content:
      "'Maido!' is a casual greeting from Osaka merchants, meaning 'Thanks always!' and used as a friendly way to welcome people.",
  },
  {
    title: "Shortest National Highway",
    content:
      "National Route 174 in Osaka is only 187.1 meters long – the shortest national highway in Japan.",
  },
  {
    title: "Chau nen!",
    content:
      "This phrase means 'That’s not it!' or 'You’re wrong!' but it’s often playful and humorous.",
  },
  {
    title: "Takoyaki Maker in Every Home",
    content:
      "Most Osaka homes have a takoyaki maker – it's a staple for family meals and gatherings.",
  },
  {
    title: "Ame-chan Culture",
    content:
      "Obachan (aunties) in Osaka carry candy ('ame-chan') and give them to start conversations or show kindness.",
  },
  {
    title: "Okonomiyaki + Rice?!",
    content:
      "In Osaka, okonomiyaki is often eaten as a side dish – yes, with rice!",
  },
  {
    title: "Nande ya nen!",
    content:
      "A classic Kansai retort meaning 'What are you saying?!' – often used in comedy and daily conversation.",
  },
  {
    title: "Tsutenkaku Tower 2.0",
    content:
      "The current Tsutenkaku Tower was rebuilt in 1956 after the original was dismantled during WWII.",
  },
  {
    title: "Namba Grand Kagetsu",
    content:
      "This theater is Osaka’s comedy central – home to Yoshimoto comedians and famous manzai acts.",
  },
];

export default function OsakaTrivia() {
  const [selectedFact, setSelectedFact] = useState(null);

  return (
    <>
     <Header/>
    <div className="trivia-container">
      <h1 className="trivia-title">🧠 Osaka Trivia</h1>
      <ul className="trivia-list">
        {facts.slice(0, 5).map((fact, index) => (
          <li
            key={index}
            className="trivia-item"
            onClick={() => setSelectedFact(fact)}
          >
            {fact.title}
          </li>
        ))}
      </ul>

      {selectedFact && (
        <div className="modal-overlay" onClick={() => setSelectedFact(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedFact.title}</h2>
            <p>{selectedFact.content}</p>
            <button onClick={() => setSelectedFact(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
