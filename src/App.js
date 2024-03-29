import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/skills" element={<Skills/>}/> 
          <Route path="/contact" element={<Contact/>}/> 

        </Route>
       

        
      </Routes>
    </>
  );
}

export default App;
