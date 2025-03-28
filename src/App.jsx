import { useState, useEffect } from "react";
import "./app.scss";
import HomePage from "./components/pages/home/HomePage";
import Recomendations from "./components/pages/recomendations/Recomendations";
import Questions from "./components/pages/questions/Questions";
import Sanguine from "./components/pages/sanguine/Sanguine";
import Melancholic from "./components/pages/melancholic/Melancholic";
import Choleric from "./components/pages/choleric/Choleric";
import Phlegmatic from "./components/pages/phlegmatic/Phlegmatic";
import quizData from './components/data/quiz.json';


import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";  // Import useLocation

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  // Move useLocation hook inside the App component
  const location = useLocation();  // This works because the component is inside the Router

  // Reset activeQuestion when routing to '/' (Home page)
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveQuestion(0);  // Reset to the first question when going to Home
    }
  }, [location.pathname]);  // Re-run when location changes

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/recomendations" exact>
          <Recomendations />
        </Route>
        <Route path="/questions" exact>
          <Questions
            data={quizData.data[activeQuestion]}
            numberOfQuestions={quizData.data.length}
            onSetActiveQuestion={setActiveQuestion}
            questionIndex={activeQuestion}
          />
        </Route>
        <Route path="/sanguine" exact>
          <Sanguine />
        </Route>
        <Route path="/melancholic" exact>
          <Melancholic />
        </Route>
        <Route path="/choleric" exact>
          <Choleric />
        </Route>
        <Route path="/phlegmatic" exact>
          <Phlegmatic />
        </Route>
      </Switch>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>  {/* Ensure BrowserRouter wraps your entire app */}
      <App />
    </Router>
  );
}
