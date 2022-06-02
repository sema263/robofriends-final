import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbox from "./components/Searchbox";
import CardList from "./components/CardList";
import { robots } from "./robots";

function App() {
  return (
    <div className="App pt-4">
      <h1>RoboFriends</h1>
      <Searchbox />
      <CardList robots={robots} />
    </div>
  );
}

export default App;
