import "./App.css";
import Navbar from "./layout/Navbar";
import CrudBase from "./CrudBase";
import { BrowserRouter as Router} from "react-router-dom";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <div className="App">
      <Router>

<Navbar />

<CrudBase />

<Footer2 />

      </Router>
    </div>
  );
}


export default App;
