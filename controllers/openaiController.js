const dotenv = require("dotenv");
dotenv.config();
const OpenAI =require('openai') ;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.completions.create({
      model: "text-embedding-ada-002",
      prompt: `Summarize this \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.ParagraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.completions.create({
      model: "text-embedding-ada-002",
      prompt: `Write detail Paragraph for \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.JsConverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.completions.create({
      model: "text-embedding-ada-002",
      prompt: `/* convert these instruction into javascript code  \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.TextToSqlController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.completions.create({
      model: "text-embedding-ada-002",
      prompt: `/* convert these instruction into Sql Query  \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.ScifiImageController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.completions.create({
      model: "text-embedding-ada-002",
      prompt: `generate a scifi image of ${text}`,
      n: 1,
      size: "512x512",
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.ChatBotController = async (req, res) => {
  try {
    const { text } = req.body;
    const { data } = await openai.completions.create({
      model: "text-embedding-ada-002",
      prompt: `Answer question similar to how Jarvis from Iron Man would.
      Me: 'what is your name?'
      Jarvis: 'yoda is my name'
      Me: ${text}`,
      max_tokens: 300,
      temperature: 0.7,
    });
    if (data) {
      if (data.choices[0].text) {
        return res.status(200).json(data.choices[0].text);
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};