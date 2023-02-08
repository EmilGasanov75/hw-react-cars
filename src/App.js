import './style.css';
import CardList from './components/CardList/CardList'
import Home from './components/Home/Home'
import CardDetails from './components/CardDetails'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import LoginForm from "./components/LoginForm/LoginForm"
import { useState, useContext, createContext } from 'react'
import {Link} from 'react-router-dom'
const UserContext = createContext();

export const useUser = () => useContext(UserContext);
function App() {
  const [username, setUsername] = useState(null);
  return (

  <UserContext.Provider value={{ setUsername, username }}>
  <Header/>
    <Routes>
      <Route path='/login' element={<LoginForm/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/store' element={<CardList/>}></Route>
      <Route path='/product/:id' element={<CardDetails/>}></Route>
    </Routes>
    <Link to="/login">Login</Link>
  </UserContext.Provider>
    
  );
}

export default App;
