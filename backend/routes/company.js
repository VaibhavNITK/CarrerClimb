import express from "express";
import { getCom, newCom } from "../controllers/company.js";
// import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newCom);
router.get("/all", getCom);
// router.post("/login", login);

// router.get("/logout", logout);

// router.get("/me", isAuthenticated, getMyProfile);

export default router;