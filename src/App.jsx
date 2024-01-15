import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignUp from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import CountdownTimer from './components/Countdown/CountdownTimer'
import Cart from './pages/Cart'
import { useShopContext } from './Context/ShopContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Browse from './pages/Browse'


function App() {
  const {toastMsg, toast ,showToast} = useShopContext();

  return (
    <>
      <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <CountdownTimer initialDuration={86400} delay={60} />
        <Navbar />
        <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/man' element={<ShopCategory category='man' />} />
            <Route path='/women' element={<ShopCategory category='women' />} />
            <Route path='/kid' element={<ShopCategory category='kid' />} />
            <Route path='/browse' element={<Browse />} />            
            <Route path='/product' element={<Product />}>
               <Route path=':productId' element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path='/loginsignup' element={<LoginSignUp />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
