import express from "express";
import registerEmpleadoController from "../controllers/registerEmpleadoController.js";
const router = express.Router();

router.route("/").post(registerEmpleadoController.register)

export default router;