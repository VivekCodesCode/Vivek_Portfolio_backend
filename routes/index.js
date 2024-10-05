
const user_data = require("../controllers/user_data")
const rivew_data = require("../controllers/rivews")
const express = require('express');
const router = express.Router();
router.get("/get_data",user_data.get_data);
router.post("/insert_data",user_data.insert_data);
router.post("/insert_rivew",rivew_data.insert_data);
router.get("/get_rivews",rivew_data.get_rivew);
module.exports = router;