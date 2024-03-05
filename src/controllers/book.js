const { BookModel } = require("../models/book");

exports.getAll = async (req, res, next) => {
  return await BookModel.findAll().then((books) => {
    res.status(200).send(books);
  });
};

exports.get = async (req, res, next) => {
  let id = req.params.id;
  return await BookModel.findOne({
    where: {
      id: id,
    },
  }).then((book) => {
    res.status(200).send(book);
  });
};

exports.create = async (req, res, next) => {
  return await BookModel.create(req.body)
    .then((book) => {
      if (book) {
        res.status(201).send(book);
      } else {
        res.status(400).send("Error ao adicionar o livro");
      }
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.update = async (req, res, next) => {
  let id = req.params.id;
  return await BookModel.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

exports.delete = async (req, res, next) => {
  let id = req.params.id;
  return await BookModel.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.status(200).send(id);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};
