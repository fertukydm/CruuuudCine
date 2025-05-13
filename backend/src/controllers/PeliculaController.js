import peliculaModel from "../models/pelicula.js";
import { v2 as cloudinary } from "cloudinary";

import { config } from "../config.js";

//1- Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret,
  });

  const PeliculaController = {};

  PeliculaController.getpelicula = async (req, res) => {
    const Pelicula = await peliculaModel.find();
    res.json(Pelicula);
  };

  PeliculaController.createPelicula = async (req, res) => {
    try {
      const { titulo, descripcion, director, genero, anio, duracion, imagen } = req.body;
      let imageUrl = "";
  
      if (req.file) {
        //Subir el archivo a Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "public",
          allowed_formats: ["jpg", "png", "jpeg"],
        });
        imageUrl = result.secure_url;
      }
  
      const newBlog = new blogModel({ titulo, descripcion, director, genero, anio, duracion, imagen:imageUrl });
      newBlog.save();
  
      res.json({ message: "Blog saved" });
    } catch (error) {
      console.log("error" + error);
    }
  };

  export default PeliculaController;