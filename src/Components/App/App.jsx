import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Products from '../Products/Products'
import Shops from '../Shops/Shops'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
