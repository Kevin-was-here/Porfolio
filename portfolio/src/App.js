import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'
import Projects from './pages/Projects/projects'
import Blog from './pages/Blog/blog'
import Navbar from './components/Navbar/navbar'
import './App.css'
import theme from './theme'

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    </Router>
  )
}

export default App;