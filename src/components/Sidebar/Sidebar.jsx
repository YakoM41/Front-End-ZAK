import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Settings, ChevronDown, ChevronRight, LogOut, Plus } from 'lucide-react'; // Import LogOut and Plus
import { CreateProjectModal } from '../modal/create_project_modal';
import { useAuth } from '../../contexte/AuthContext'; // Import useAuth

const Sidebar = ({ projects = [] }) => {
    const [isProjectsOpen, setIsProjectsOpen] = useState(true);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirige vers la page d'accueil après déconnexion
    };

    return (
        <aside className="w-64 h-screen bg-tf-dark-bg text-tf-text-light flex flex-col border-r border-slate-700/50 sticky top-0">
            {/* --- EN-TÊTE SIDEBAR --- */}
            <div className="p-6 flex items-center gap-3 border-b border-slate-700/50">
                <img src="/images/logo-taskflow.svg" alt="TaskFlow Logo" className="w-32" />
            </div>

            {/* --- NAVIGATION PRINCIPALE --- */}
            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
                
                {/* Section Dashboard */}
                <div className="space-y-1">
                    <Link 
                        to="/dashboard"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                        <LayoutDashboard size={18} className="text-amber-400" />
                        Dashboard
                    </Link>
                </div>

                {/* Section Projets (Dépliant) */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between px-3 py-2 text-sm font-bold text-tf-text-accent uppercase tracking-wider">
                        <span>Mes Projets</span>
                        <button 
                            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                            className="p-1 hover:bg-slate-800 rounded-md transition-colors"
                        >
                            {isProjectsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                    </div>

                    {isProjectsOpen && (
                        <div className="space-y-1">
                            {projects.map((project) => (
                                <Link
                                    key={project.id_project}
                                    to={`/kanban/${project.id_project}`}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors pl-8"
                                >
                                    <FolderKanban size={16} />
                                    <span className="truncate">{project.project_name}</span>
                                </Link>
                            ))}
                            
                            {/* Le bouton de création de la sidebar intègre directement la modale */}
                            <div className="pl-3 mt-2">
                                <CreateProjectModal />
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* --- PIED DE SIDEBAR (Compte & Déconnexion) --- */}
            <div className="p-4 border-t border-slate-700/50 space-y-2">
                <Link 
                    to="/account"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                    <Settings size={18} />
                    Mon Compte
                </Link>
                <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-colors"
                >
                    <LogOut size={18} />
                    Déconnexion
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;