const express = require("express");

const PageCtrl = require("../controllers/page-controller");

const router = express.Router();

router.post("/page", PageCtrl.createPage);
router.put("/page/:id", PageCtrl.updatePage);
router.delete("/page/:id", PageCtrl.deletePage);
router.get("/page/:id", PageCtrl.getPageById);
router.get("/pages", PageCtrl.getPages);
