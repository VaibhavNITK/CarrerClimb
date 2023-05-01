import express from "express";
import { applyComUser, getCom, newCom, updateCom } from "../controllers/company.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new",isAuthenticated, newCom);
router.get("/all", getCom);
// router.post("/login", login);
router.put("/update/:id",isAuthenticated,updateCom);
router.put("/:id",isAuthenticated,applyComUser);

// router.get("/logout", logout);

// router.get("/me", isAuthenticated, getMyProfile);

export default router;