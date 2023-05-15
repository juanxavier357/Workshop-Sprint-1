import { Routes, Route  } from 'react-router-dom'

import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App