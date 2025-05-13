const PeliculaController = {};
import employeeModel from "../models/pelicula.js";

PeliculaController.getpelicula = async (req, res) => {
    const pelicula = await peliculaModel.find();
    res.json(pelicula);
  };

  PeliculaController.createPelicula = async (req, res) => {
    const { titulo, descripcion, director, genero, anio, duracion, imagen } = req.body;
    const newPelicula= new peliculaModel({  titulo, descripcion, director, genero, anio, duracion, imagen });
    await newPelicula.save();
    res.json({ message: "Pelicula save" });

  };
  // DELETE
PeliculaController.deletePelicula = async (req, res) => {
    const deletePelicula = await peliculaModel.findByIdAndDelete(req.params.id);
      if (!deletePelicula) {
        return res.status(404).json({ message: "Pelicula dont find" });
      }
      res.json({ message: "Pelicula deleted" });
    };
    
    // UPDATE
    PeliculaController.updatePelicula = async (req, res) => {
      // Solicito todos los valores
      const {  titulo, descripcion, director, genero, anio, duracion, imagen  } = req.body;
      // Actualizo
      await peliculaModel.findByIdAndUpdate(
        req.params.id,
        {
            titulo,
             descripcion, 
             director,
              genero,
               anio,
                duracion,
                 imagen 
        },
        { new: true }
      );
      // muestro un mensaje que todo se actualizo
      res.json({ message: "Pelicula update" });
    };
    
    export default PeliculaController;
    