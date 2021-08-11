import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import './Styles/index.scss';
import NavBar from './Components/NavBar/NavBar';
import ItemsListContainer from './Components/ItemsListContainer/ItemsListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemsListContainer greeting="Bienvenidos!"/>
    </div>
  );
}

export default App;
