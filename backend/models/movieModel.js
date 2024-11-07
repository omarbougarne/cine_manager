const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);  


const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    description: { type: String },
    releaseDate: { type: Date, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
    videoUrl: { type: String, required: false },
    imageUrl: { type: String, required: false },  
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});


const Movie = mongoose.model('Movie', movieSchema);


const validateMovie = (movie) => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(255).required(),
        genre: Joi.string().min(3).max(100).required(),
        description: Joi.string().max(1000).optional(),
        releaseDate: Joi.date().required(),
        // videoUrl: Joi.string().uri().required(),   
        // imageUrl: Joi.string().uri().required(),  
        // createdBy: Joi.objectId().required(),  
        rating: Joi.number().min(0).max(10).optional(),
        comments: Joi.array().items(Joi.objectId()).optional()
    });

    return schema.validate(movie);
};


module.exports = {
    Movie,
    validateMovie
};