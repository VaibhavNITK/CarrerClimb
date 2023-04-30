import express from "express";
import { applyComUser, getCom, newCom } from "../controllers/company.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new",isAuthenticated, newCom);
router.get("/all",isAuthenticated, getCom);
// router.post("/login", login);
router.put("/:id",isAuthenticated,applyComUser);
// router.get("/logout", logout);

// router.get("/me", isAuthenticated, getMyProfile);

export default router;