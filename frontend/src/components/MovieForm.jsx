import React, { useState } from 'react';
import { createMovie } from '../services/movieService';

const MovieForm = ({ onMovieCreated }) => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        console.log(selectedFile); 
    };


    const handleSubmit  = async (e) => {
        e.preventDefault();
        const movieData = {
            title,
            genre,
            description,
            releaseDate,
            videoUrl,
            file
        };
        try{
            const movie = await createMovie(movieData)
            console.log('Movie created', movie)
            if(onMovieCreated){
                onMovieCreated();
            }
        }catch(error){
            console.error('Error creating movie:', error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
             <h2>Add Movie</h2>
             <input
             type='text'
             placeholder ='title'
             value = {title}
             onChange = {(e) => setTitle(e.target.value)}
             required
            />
             <input
             type="text"
             placeholder="genre"
             value={genre}
             onChange={(e) => setGenre(e.target.value)}
             required
            />

            <textarea
             type="text"
             placeholder="Description"
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             required
            />

            <textarea
             type="text"
             placeholder="Comment"
             value={comment}
             onChange={(e) => setDescription(e.target.value)}
             required
            />

            <input
             type="number"
             placeholder="Rate"
             value={releaseDate}
             onChange={(e) => setReleaseDate(e.target.value)}
             required
            />

            <button type="submit">Add Movie</button>
        </form>
    )
}
export default MovieForm