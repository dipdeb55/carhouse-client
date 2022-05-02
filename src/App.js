import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/SignUp/SignUp';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Update from './components/Inventory/Update/Update';
import ManageInventory from './components/Manage Inventory/ManageInventory';
import AddCars from './components/AddCars/AddCars';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:id' element={<RequiredAuth><Update></Update></RequiredAuth>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addCar' element={<AddCars></AddCars>}></Route>
      </Routes>
    </div>
  );
}

export default App;
