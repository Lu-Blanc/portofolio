import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skill/Skills';
import Work from './components/work/Work'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = ()=> {
  return (
    <>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
