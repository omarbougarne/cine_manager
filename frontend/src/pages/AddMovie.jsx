import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieForm from '../components/MovieForm';

const AddMovie = () => {
    const navigate = useNavigate();

    const handleMovieCreated = () => {
        
        navigate('/movies');
    };

    return (
        <div>
            <MovieForm onMovieCreated={handleMovieCreated} />
        </div>
    );
};

export default AddMovie;
