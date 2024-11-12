import axios from "axios";

const API_URL = 'http://localhost:5000/api/movies';

export const createMovie = async (movieData) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;  // Corrected "localStorage"
    const formData = new FormData();

    formData.append('title', movieData.title);
    formData.append('genre', movieData.genre);
    formData.append('description', movieData.description);
    formData.append('releaseDate', movieData.releaseDate);
    formData.append('videoUrl', movieData.videoUrl);
    formData.append('image', movieData.file);

    try {
        const response = await axios.post(API_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating movie:", error);  
        throw error;
    }
};
