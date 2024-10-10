import Movie from '../models/mongoDB/Movie.js';


export const movieController = {
    //get all movies
    async getAll(req, res) {
        try{
            const movies = await Movie.find()
            movies.lenght ?
            res.status(404).json({succes: false, message: "Movies Database is empty", data: movies})
            :
            res.status(200).json({succes: true, message: "Movies Collection", data: movies})
        } catch(error){
            res.status(500).json({succes: false, message: "Internal Server Error"})
        }
    },


    //creacion de nuevos
    async creatOne(req, res) {
        const {title, year, director, duration, poster, genre, rate}= req.body
        try {
            const newMovie = await Movie({title, year, director, duration, poster, genre, rate
            })
            const saveMovie = await newMovie.save()
            res.status(200).json({succes: true, message: "New Movies Created", data: saveMovie})
        } catch (error) {
            res.status(500).json({succes: false, message: "Internal Server Error"})
        }
    },

      //Modificar uno
      async updateOne(req, res) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
            if (!updatedMovie){
                return  res.status(404).json({succes: false, message: "Update Movies Not Found. Update faild."})
              }
              res.status(200).json({succes:true, message: updatedMovie})
        } catch (error) {
            res.status(500).json({succes: false, message: "Internal Server Error"})
        }
      },


    //Borrar uno
    async deleteOne(req, res) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id)
            if (!movie){
              return  res.status(404).json({succes: false, message: "Movies Not Found. Deleted faild."})
            }
            res.status(204)
        } catch (error) {
        }
    },


    async getByTitle(req, res) {
        const { title } = req.query;
        if (!title) {
            return res.status(400).json({ success: false, message: "Missing 'title' query param" });
        }
        try {
            const songs = await Song.find({ title: { $regex: title, $options: "i" } });
            if (!songs.length) {
                return res.status(404).json({ success: false, message: `No songs with '${title}' in the title` });
            }
            res.status(200).json({
                success: true,
                message: "Songs by query title",
                data: songs
            });
        } catch (error) {
            res.status(500).json({ success: false, message: `Internal Server Error --> ${error}` });
        }
    }

}