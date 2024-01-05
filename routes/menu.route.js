const router = require("express").Router();
const menuController = require('../controllers/menu.controller');
const uploadFile = require('./save');

app.post('/upload-menu', menuController.uploadfile);

app.get('/convert-menu', menuController.convertmenu);

app.get('/menu/:date', menuController.menubydate );


module.exports = router;