import "./App.css";
import AppHeader from "./components/header/AppHeader";
import PageContent from "./components/pageContent/PageContent";
import AppFooter from "./components/footer/AppFooter";

import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

function App() {
  return(
  <div className="App">

<BrowserRouter>
    <AppHeader/>
    <PageContent/>
    <AppFooter/>
</BrowserRouter>

  </div>
        );
}


export default App;
