import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import routes from "./constants/routes";

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Router>
        <NavbarComponent />
        <Switch>
          {routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))}
        </Switch>

      </Router>
    </div>
  );
}

export default App;
