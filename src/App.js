import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greating from './components/Greating';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Greating />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
