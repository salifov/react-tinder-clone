import "./App.css";
import Header from "./Header/Header";
import TinderCards from "./TinderCards/TinderCards";
import SwipeButtons from "./SwipeButtons/SwipeButtons";

function App() {
  return (
    <div className="app">
      <h1>MERN TINDER</h1>

      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
