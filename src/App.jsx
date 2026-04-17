import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';

function App() {
  return (
      <Routes>
        {/* Ta page d'accueil par défaut */}
        <Route path="/" element={<Home />} />

        {/* Tu pourras ajouter les autres routes ici plus tard */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
  );
}

export default App;