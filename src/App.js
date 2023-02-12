import React, { useEffect, useState } from 'react'
import { Footer , Blog , Possibility , Features , WhatGPT3 , Header  } from './containers';
import { Navbar , CTA , Brand } from './components';
import './App.css';
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom';
import { Login } from './Login';
import { auth } from './firebase';
 
const App = () => {

  const [ userlogged , setUserLogged ] = useState("");
  useEffect (() => {
    auth.onAuthStateChanged(user => {
      if(user){
        setUserLogged(user.displayName);
      }else setUserLogged("");
    })
  } , [] )

  return (
    <BrowserRouter>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
          <div className='gradient__bg'>
            <Routes>
              <Route path='/' element={<Navbar name={userlogged} />}></Route>
            </Routes>
            <Routes>
              <Route path='/' element={<Header />}></Route>
            </Routes>
            {/* <Navbar /> */}
            {/* <Header /> */}
          </div>
          <Routes>
            <Route path='/' element={<Brand />}></Route>
          </Routes>
          <Routes>
            <Route path='/' element={<WhatGPT3 />}></Route>
          </Routes>
          <Routes>
            <Route path='/' element={<Features />}></Route>
          </Routes>
          <Routes>
            <Route path='/' element={<Possibility />}></Route>
          </Routes>
          <Routes>
            <Route path='/' element={<CTA />}></Route>
          </Routes>
          <Routes>
            <Route path='/' element={<Blog />}></Route>
          </Routes>
          <Routes>
            <Route path='/' element={<Footer />}></Route>
          </Routes>
          {/* <Brand />
          <WhatGPT3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer /> */}
        </div>
      </Router>
    </BrowserRouter>
  )
}

export default App
