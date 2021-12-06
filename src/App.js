import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/UI/Sidebar";
import HomePage from "./pages/HomePage";
import Horoscope from "./pages/Horoscope";
function App() {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/horoscope/today">
          <Horoscope />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
