import express from "express";
import employeeController from "../controllers/EmpleadosController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(EmpleadosController.getEmpleados)
  .post(EmpleadosController.createemployee);

router
  .route("/:id")
  .put(employeeController.updateemployee)
  .delete(employeeController.deleteemployee);

export default router;