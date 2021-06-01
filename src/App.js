import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import routes from "./constants/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
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
      <ToastContainer />
    </div>
  );
}

export default App;
