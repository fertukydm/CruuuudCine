import express from "express";
import PeliculaController from "../controllers/PeliculaController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(PeliculaController.getpelicula)
  .post(PeliculaController.createPelicula);

router
  .route("/:id")
  .put(PeliculaController.updatePelicula)
  .delete(PeliculaController.deletePelicula);

export default router;