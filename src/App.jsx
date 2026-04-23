import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation de toutes les pages
import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import Kanban from './pages/kanban.jsx';
import Account from './pages/account.jsx';
import Cgu from './pages/cgu.jsx';
import Rgpd from './pages/rgpd.jsx';
import Legal from './pages/legal.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
      <BrowserRouter>
          {/* Conteneur principal flexible pour que le footer reste toujours en bas */}
          <div className="min-h-screen flex flex-col">
              
              {/* Zone qui prend tout l'espace disponible (pousse le footer vers le bas) */}
              <div className="flex-1 flex flex-col">
                  <Routes>
                    {/* Page d'accueil avec le formulaire de connexion */}
                    <Route path="/" element={<Home />} />

                    {/* Pages principales de l'application (protégées) */}
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    {/* Correction du paramètre de la route kanban */}
                    <Route path="/kanban/:projectId" element={<ProtectedRoute><Kanban /></ProtectedRoute>} />
                    <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />

                    {/* Pages d'information et légales (liens du footer) */}
                    <Route path="/cgu" element={<Cgu />} />
                    <Route path="/privacy" element={<Rgpd />} />
                    <Route path="/mentions-legales" element={<Legal />} />

                  </Routes>
              </div>

              {/* Le footer est affiché une seule fois pour toute l'application */}
              <Footer />
              
          </div>
      </BrowserRouter>
  );
}

export default App;