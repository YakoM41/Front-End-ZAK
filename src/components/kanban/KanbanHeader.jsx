import React from 'react';
import { Plus, FileDown } from 'lucide-react';
import { CreateTaskModal } from '../modal/create_task_modal';
import { Button } from '@/components/ui/button';
import { AddMemberModal } from '../modal/add_member_modal'; 
import { exportToPdf } from '../tools/exportPdf'; // Import de la fonction d'export PDF

const KanbanHeader = ({ projectId, onTaskCreated, searchQuery, setSearchQuery }) => {
    
    // Fonction qui déclenche l'exportation
    const handleExport = async () => {
        // 'kanban-board' sera l'ID de la zone contenant les colonnes que ton collègue est en train de coder
        // 'projet-${projectId}-export' est le nom du fichier généré
        try {
            await exportToPdf('kanban-board', `projet-${projectId || 'inconnu'}-export`);
        } catch (error) {
            console.error("Erreur lors de l'export PDF:", error);
        }
    };

    return (
        <header className="bg-white border-b border-slate-200 px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sticky top-0 z-10 shadow-sm">
            <h1 className="text-2xl font-raleway font-bold text-slate-800 tracking-tight">
                Tâches du projet
            </h1>

            <div className="flex items-center gap-4 w-full sm:w-auto">
                
                {/* Bouton Exporter PDF */}
                <Button variant="outline" size="icon" onClick={handleExport} aria-label="Exporter en PDF" className="shrink-0">
                    <FileDown className="h-5 w-5" />
                </Button>

                {/* Modale d'ajout de membre avec le vrai projectId */}
                <AddMemberModal projectId={projectId} />

                {/* La modale enveloppe le bouton qui sert de déclencheur */}
                <CreateTaskModal projectId={projectId} onTaskCreated={onTaskCreated}>
                    <Button variant="secondary" className="gap-2">
                        <Plus size={16} />
                        Créer une Tâche
                    </Button>
                </CreateTaskModal>
            </div>
        </header>
    );
};

export default KanbanHeader;