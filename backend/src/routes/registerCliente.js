import express from "express";
import registerClienteController from "../controllers/registerClienteController.js";
const router = express.Router();

router.route("/").post(registerClienteController.register);
router.route("/verifyCodeEmail").post(registerClienteController.verifyCodeEmail);

export default router;