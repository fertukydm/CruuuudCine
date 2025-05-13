import express from "express";
import multer from "multer";
import PeliculaController from "../controllers/PeliculaController.js";

const router = express.Router();

//configurar una carpeta local que guarde las imagenes
const upload = multer({dest: "public/"})

router
  .route("/")
  .get(PeliculaController.getpelicula)
  .post(upload.single("image"), PeliculaController.createPelicula);

export default router;