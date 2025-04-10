import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopPage from "./components/TopPage";
import PhraseCard from "./components/PhraseCard";
import OsakaTrivia from "./components/OsakaTrivia";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/osaka-phrases" element={<PhraseCard />} />
        <Route path="/osaka-trivia" element={<OsakaTrivia />} />
      </Routes>
    </Router>
  );
}

export default App;