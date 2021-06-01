import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import routes from "./constants/routes";
import styled from 'styled-components'
import landingBackground from './assets/imgs/landingBackground.jpg'

const MainApp=styled.div`
height:100vh;
background-color:black;// fallback
background-image:url(${landingBackground});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`

function App() {
  return (
    <MainApp>
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
    </MainApp>
  );
}

export default App;
