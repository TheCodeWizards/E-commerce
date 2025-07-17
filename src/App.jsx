import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
// import { DataContext } from './context/DataContext'
import Loader from './components/Loader'
import Product from './pages/Product'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import { Bounce, ToastContainer } from 'react-toastify'
import Category from './pages//Category'
import Contact from './pages/Contact'
import ProtectedRoute from './components/ProtectedRoute'
import ScrollToUp from './components/ScrollToUp'
import UserLocationMap from './components/UserLocationMap'
// import useData from './Hooks/Data'

const App = () => {
  
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />
          <ScrollToUp/>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <div>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/product' element={<Product />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/map' element={<UserLocationMap />}></Route>
              <Route path='/product/:id' element={<SingleProduct />}></Route>
              <Route path='/cart' element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>}></Route>
              <Route path='/category/:category' element={<Category />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App