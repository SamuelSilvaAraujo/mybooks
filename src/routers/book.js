const express = require("express");
const router = express.Router();
const controller = require("../controllers/book");

router.get("/", controller.getAll);
router.get("/:id", controller.get);
router.post("/create", controller.create);
router.put("/update/:id", controller.update);
router.delete("/delete/:id", controller.delete);

module.exports = router;
