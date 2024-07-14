import axios from 'axios';

// URL de base de l'API
const API_URL = 'http://127.0.0.1:8000/api/alldata'; // Remplacez par votre URL API

// Fonction pour obtenir des données
export const getData = async () => {
    try {
        const response = await axios.get(`${API_URL}`); // Remplacez 'endpoint' par l'endpoint de votre API
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};