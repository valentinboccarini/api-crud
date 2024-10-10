import { mongoose } from "mongoose";
const currYear = new Date ().getFullYear()
const Schema = mongoose.Schema
const MovieSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },

    year:{
        type: Number,
        required: true,
        min: [1896, "Año minimo 1896"],
        max: [currYear, "No se puede exceder el año actual"]
    },

    director: {
        type: String,
        require: true,
        trim: true
    },

    duration:{
        type: Number,
        required: true,
        trim: true
    },
    
    poster: {
        type: String,
        required: true,
    },

    genre: {
        type: [String],
        required: true,
    },

    rate: {
        type: Number,
        min: [0],
        max: [10]
    }
     },{
        timestamps: true
})

const Movie= mongoose.model('Movie', MovieSchema)
export default Movie