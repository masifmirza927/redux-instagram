const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/PostController");
const multer = require("multer");
const checkAuth = require("../middlewares/CheckAuth");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post("/create", [checkAuth, upload.single('image')] , postCtrl.createPost);
router.get("/my", checkAuth,  postCtrl.myPosts);
// router.get("/all",  postCtrl.allPosts);

module.exports = router;