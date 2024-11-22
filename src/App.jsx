// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Introducao from './components/introducao';
import Footer from './components/footer';
import './css/style.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/tipos" element={<div>Tipos de Energia</div>} />
          <Route path="/beneficios" element={<div>Benefícios</div>} />
          <Route path="/contato" element={<div>Contato</div>} />
        </Routes>
        <Introducao />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
