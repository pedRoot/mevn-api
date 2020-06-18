import express from "express";
import { create, read, list, destroy, update } from "../controllers/notas";

const router = express.Router();

router.post("/nueva-nota", create);
router.get("/nota/:id", read);
router.get("/notas", list);
router.delete("/nota/:id", destroy);
router.put("/nota/:id", update);

module.exports = router;
