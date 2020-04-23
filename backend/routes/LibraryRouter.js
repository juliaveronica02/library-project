const express = require("express");
const router = express.Router();
const LibraryContainer = require("../Container/libraryContainer");

router.post("/post", LibraryContainer.createData);
router.get("/get", LibraryContainer.getData);
router.get("/get/:libraryId", LibraryContainer.getDataById);
router.delete("/delete/:libraryId", LibraryContainer.deleteById);
router.put("/edit/:libraryId", LibraryContainer.editById);

module.exports = router;
