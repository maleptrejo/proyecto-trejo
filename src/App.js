import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.scss';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Landing/Landing';
import { Cart } from './Components/CartContainer/Cart';
import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import { Checkout } from "./Components/Checkout/Checkout";


function App() {
  return (
    <CartProvider>
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
              <Route exact path="/cart">
                  <Cart />
              </Route>
              <Route exact path="/checkout">
                  <Checkout/>
              </Route>
              <Route path="*">
                    <Redirect to="/"/>
              </Route>
              
          </Switch>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
