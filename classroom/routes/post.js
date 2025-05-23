const express = require("express");
const router = express.Router();

//posts
//Index 
router.get("/", (req, res) => {
    res.send("GET for post");
});

//Show 
router.get("/:id", (req, res) => {
    res.send("GET for post id");
});

//Post
router.post("/", (req, res) => {
    res.send("POST for post");
});

//DELETE 
router.delete("/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;