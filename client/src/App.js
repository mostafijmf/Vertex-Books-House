import { Route, Routes } from 'react-router-dom';
import RequireAuth from './pages/Shared/RequireAuth/RequireAuth';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import InventoryDetail from './pages/Home/InventoryDetail/InventoryDetail';
import Footer from './pages/Shared/Footer/Footer';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddItem from './pages/AddItem/AddItem';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import MyItems from './pages/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
