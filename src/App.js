import { Provider } from 'react-redux'
import store from './redux/store'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import routes from "./constants/routes";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>

      <Router>
        <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
          <ToastContainer />
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
            <Redirect to='/' />
          </Switch>


        </div>
      </Router>



    </Provider>
  );
}

export default App;
