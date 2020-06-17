import express from "express";
const router = express.Router();

import Nota from '../models/nota';

router.post('/nueva-nota', async (req, res) => {

  const body = req.body;

  try {

    const newNota = await Nota.create(body);
    return res.satus(200).json({
      mensaje: "Nota creada correctamente",
      nota: newNota
    })
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error
    })
  }
});

module.exports = router;