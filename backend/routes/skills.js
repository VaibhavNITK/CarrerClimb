import { addSkills,getSkills,updateSkills,deleteSkills } from "../controllers/skills.js";
import { isAuthenticated } from "../middlewares/auth.js";
import express from "express";
const router = express.Router();

router.post("/new",isAuthenticated, addSkills);


router.get("/all",isAuthenticated, getSkills);

router.put("/update/:id",isAuthenticated, updateSkills);

router.delete("/delete/:id", isAuthenticated, deleteSkills);

export default router;