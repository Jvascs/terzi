import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {


    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<div>Ana Sayfa</div>} />
                <Route path="/about" element={<div>Hakkımızda</div>} />
                <Route path="/services" element={<div>Hizmetlerimiz</div>} />
                <Route path="/contact" element={<div>İletişim</div>} />
            </Routes>
        </Router>
    );
}

export default App;
