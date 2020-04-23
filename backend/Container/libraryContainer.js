const Library = require("../Models/Library");
module.exports = {
  createData: (req, res) => {
    Library.create({
      bookTitle: req.body.bookTitle,
      years: req.body.years,
      bookNumber: req.body.bookNumber,
      status: req.body.status,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  getData: (req, res) => {
    Library.find({})
      .then((result) => {
        res.json({ status: "success", data: result });
      })
      .catch((err) => err);
  },
  getDataById: (req, res) => {
    Library.findById(req.params.libraryId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  deleteById: (req, res) => {
    Library.findByIdAndRemove(req.params.libraryId)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  editById: (req, res) => {
    Library.findByIdAndUpdate(req.params.libraryId, {
      bookTitle: req.body.bookTitle,
      years: req.body.years,
      bookNumber: req.body.bookNumber,
      status: req.body.status,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
