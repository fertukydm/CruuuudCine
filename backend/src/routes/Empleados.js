import express from "express";
import EmpleadoController from "../controllers/EmpleadosController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(EmpleadoController.getEmpleado)
  .post(EmpleadoController.createEmpleado);

router
  .route("/:id")
  .put(EmpleadoController.updateEmpleado)
  .delete(EmpleadoController.deleteEmpleado);

export default router;