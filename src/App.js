import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import './Styles/index.scss';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Landing/Landing';
import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter> 
          <NavBar/>
          <Switch>
              <Route exact path="/">
                  <Landing />
                  <ItemsListContainer greeting="Bienvenidos!"/>
              </Route>
              <Route exact path="/detail/:itemId">
                  <ItemDetailContainer />
              </Route>
              <Route exact path="/category/:catId">
                  <ItemsListContainer />
              </Route>
              <Route path="*">
                    <Redirect to="/"/>
              </Route>
          </Switch>
    </BrowserRouter>
  );
}

export default App;


{/* <div className="App">
      <NavBar/>
      <ItemsListContainer greeting="Bienvenidos!"/>
    </div> */}