const express= require('express');
const { summaryController, ParagraphController, ChatBotController, ScifiImageController, JsConverterController } = require('../controllers/openaiController');

const router= express.Router();

//route
router.post('/summary',summaryController)
router.post('/paragraph',ParagraphController)
router.post('/chatbot',ChatBotController);
router.post('/scifi-image',ScifiImageController);
router.post('/js-converter',JsConverterController);

module.exports= router;