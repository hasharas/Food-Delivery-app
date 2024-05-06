import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Card from './pages/Card/Card.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
  <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>

            < Route path='/' element = {<Home/>} />
            < Route path='/card' element = {<Card/>} />
            < Route path='/placeorder' element = {<PlaceOrder/>} />

        </Routes>
    </div>
        <Footer />
  </>
  );
}

export default App;
