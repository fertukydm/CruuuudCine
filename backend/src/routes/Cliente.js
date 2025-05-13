import express from "express";
import branchesController from "../controllers/ClienteController.js";
import ClienteController from "../controllers/ClienteController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(ClienteController.getCliente)
  .post(ClienteController.createCliente);

router
  .route("/:id")
  .put(ClienteController.updateCliente)
  .delete(ClienteController.deleteCliente);

export default router;