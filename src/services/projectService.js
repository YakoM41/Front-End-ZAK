// src/services/projectService.js
// Ce fichier regroupe toutes les requêtes API concernant les projets

const API_URL = 'http://localhost:3000/api';

/**
 * Récupère la liste de tous les projets
 * @returns {Promise<Array>} Un tableau d'objets représentant les projets
 */
export const fetchProjects = async () => {
    try {
        const response = await fetch(`${API_URL}/projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // Important pour que le navigateur envoie le cookie HTTP-Only avec la requête GET
            credentials: 'include', 
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data; // On suppose que le backend renvoie un tableau de projets
    } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
        throw error;
    }
};

/**
 * Crée un nouveau projet
 * @param {Object} projectData Les données du projet (ex: { name, description })
 * @returns {Promise<Object>} Le projet nouvellement créé
 */
export const createProject = async (projectData) => {
    try {
        const response = await fetch(`${API_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Important pour que le navigateur envoie le cookie HTTP-Only avec la requête POST
            credentials: 'include',
            body: JSON.stringify(projectData),
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data; // On suppose que le backend renvoie le projet créé
    } catch (error) {
        console.error("Erreur lors de la création du projet:", error);
        throw error;
    }
};