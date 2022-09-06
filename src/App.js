import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog';
import Footer from './components/Footer'
import Works from './components/Works';
import NoMatch from './components/NoMatch';
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Header />      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='works/*' element={<Works />} />
        <Route path='blog' element={<Blog />} />
        <Route path='*' element={<NoMatch />} />
      </Routes> 
      <Footer />
    </HashRouter>
  )
}

export default App
