import StarshipCard from "./components/starshipCard.jsx";
import Sidebar from "./components/sideBar.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <h1 className="Title">Star Wars Starships</h1>
      <StarshipCard />
    </div>
  );
}

export default App;
