import express from "express";
const router = express.Router();
import logoutController from "../controllers/LogoutController.js";

router.route("/").post(logoutController.logout);
3;
export default router;