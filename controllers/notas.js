import Nota from "../models/nota";

const create = async (req, res) => {

  const body = req.body;

  try {

    const newNota = await Nota.create(body);

    res.json({
      mensaje: "Nota creada correctamente",
      nota: newNota
    });

  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un Error",
      error
    });
  }
}

const read = async (req, res) => {
  const _id = req.params.id;

  try {

    const nota = await Nota.findOne({_id});
    res.json({nota})

  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un Error",
      error
    });
  }

}
const list = async (req, res) => {
  try {

    const notas = await Nota.find();
    res.json({notas})

  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un Error",
      error
    });
  }
}
const destroy = async (req, res) => {
  const _id = req.params.id;

  try {

    const nota = await Nota.findByIdAndDelete({_id});
    res.json({nota});

  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un Error",
      error
    });
  }
}
const update = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  try {

    const nota = await Nota.findByIdAndUpdate(_id,body, {new: true});
    res.json({nota});

  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un Error",
      error
    });
  }
}

module.exports = {
  create,
  read,
  list,
  destroy,
  update
}
