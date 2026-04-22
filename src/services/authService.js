// src/services/authService.js
// Ce fichier regroupe toutes les requêtes API concernant l'authentification

const API_URL = 'http://localhost:3000/api';

/**
 * Connecte un utilisateur
 * @param {string} email - L'email de l'utilisateur
 * @param {string} password - Le mot de passe de l'utilisateur
 * @returns {Promise<Object>} Les données de l'utilisateur et/ou le token
 */
export const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', 
            body: JSON.stringify({ 
                email: email, 
                Mot_de_passe: password 
            }),
        });

        if (!response.ok) {
            let errorMessage = `Erreur HTTP: ${response.status}`;
            try {
                const errorData = await response.json();
                if (errorData && errorData.message) {
                    errorMessage = errorData.message;
                }
            } catch (e) {
                // Le corps de la réponse n'est pas du JSON
            }
            throw new Error(errorMessage);
        }

        return await response.json(); 
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        throw error;
    }
};

/**
 * Vérifie si l'utilisateur est connecté et récupère ses infos
 * @returns {Promise<Object>} Les données de l'utilisateur si connecté
 */
export const checkAuth = async () => {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // Indispensable pour envoyer le cookie HttpOnly
            credentials: 'include', 
        });

        if (!response.ok) {
            // Si 401 ou autre erreur, on considère que l'utilisateur n'est pas connecté
            throw new Error(`Non authentifié ou session expirée`);
        }

        return await response.json(); 
    } catch (error) {
        // On ne loggue pas l'erreur comme une erreur fatale car c'est normal si l'utilisateur n'est pas connecté
        throw error;
    }
};

/**
 * Déconnecte l'utilisateur
 */
export const logout = async () => {
    try {
        const response = await fetch(`${API_URL}/users/logout`, {
            method: 'POST', // Ton backend attend un POST pour logout
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
             throw new Error(`Erreur lors de la déconnexion`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la déconnexion:", error);
        throw error;
    }
};