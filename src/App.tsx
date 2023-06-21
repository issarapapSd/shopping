import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Product from './pages/Product';
import { Route, Routes } from "react-router";
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {


  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} />
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>

    </>
  )
}

export default App
