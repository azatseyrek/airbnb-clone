import "./App.css";
import Footer from "./components/HomePage/Footer";
import Header from "./components/HomePage/Header";
import Home from "./components/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            {/*  /  */}
            <Home />
          </Route>

          <Route path="/search">
            {/* /search */}
            <SearchPage />

          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
