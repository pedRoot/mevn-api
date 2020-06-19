import Nota from "../models/nota";

const create = async (req, res) => {
  const body = req.body;

  await Nota.create(body, (err, nota) => {
    if (err) return res.status(500).json({ err });
    res.json({
      status: "Succesfull",
      nota,
    });
  });
};

const read = async (req, res) => {
  const _id = req.params.id;

  await Nota.findOne({ _id }, (err, nota) => {
    if (err) return res.sataus(500).json({ err });
    if (!nota)
      return res
        .status(404)
        .json({ status: "error", message: "Record not found" });

    res.json({ status: "successfull", nota });
  });
};
const list = async (req, res) => {
  await Nota.find({}, (err, notas) => {
    if (err) return res.status(500).json({ err });
    if (!notas)
      return res.status(404).json({ status: "error", message: "Not records" });

    res.json({ status: "successfull", notas });
  });
};
const destroy = async (req, res) => {
  const _id = req.params.id;

  await Nota.findByIdAndDelete({ _id }, (err, nota) => {
    if (err) return res.status(500).json({ err });
    if (!nota)
      return res
        .status(404)
        .json({ status: "error", message: "Record not found" });

    res.json({ status: "successfull", nota });
  });
};

const update = async (req, res) => {
  const _id = req.params.id;
  const body = req.body;

  await Nota.findByIdAndUpdate(_id, body, { new: true }, (err, nota) => {
    if (err) return res.status(500).json({ err });
    if (!nota)
      return res
        .status(404)
        .json({ status: "error", message: "Record not found" });

    res.json({ status: "successfull", nota });
  });
};

module.exports = {
  create,
  read,
  list,
  destroy,
  update,
};
