import express from "express";
import { addLink,getLinks,deleteLink } from "../controllers/link.js"; 
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new",isAuthenticated, addLink);

router.get("/all",isAuthenticated, getLinks);

router.delete("/delete/:id", isAuthenticated, deleteLink);

export default router;