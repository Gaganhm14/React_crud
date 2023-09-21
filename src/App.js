
import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Crudapplication from './components/Crudapplication';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Crudapplication/>}/>
      <Route path='/all' element={ <AllUsers/>}/>
      <Route path='/add' element={ <AddUser/>}/>
      <Route path='/edit/:id' element={ <EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
