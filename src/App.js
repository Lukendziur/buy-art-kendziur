// import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
  <>
  <NavBar/>
  <ItemListContainer greeting='hola desde prop'/>
  </>
  );
}

export default App;
