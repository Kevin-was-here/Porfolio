import React from 'react';
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Projects from './components/Projects/projects'
import Navbar from './components/Navbar/navbar'

export default function App() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    );
  }