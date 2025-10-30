const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config();
// create config object witH PORT
const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};
mongoose
  .connect(config.DB_URL)
  .then(() => console.log("Connected to MongoDB")
  
  )
  .catch((err) => console.error("Error connecting to MongoDB: ", err));

// Uncomment this code block to test getPolls

 const { getPolls } = require("./controllers/pollController");

 (async () => {
  console.log("Running getPolls()...");
  //const result = await getPolls();
  const req = {}; 
  const res = {
    status: (code) => ({
      json: (data) => console.log("Response:", code, data),
    })
  }
 //console.log(result);
 })();

// Uncomment this code block to test getPoll

const { getPoll } = require("./controllers/pollController");

(async () => {
 console.log("Running getPoll()...");
 const req = { params: {id: "67144a73c527df736fbe5eac"}}; 
const res = {
  status: (code) => ({
    json: (data) => console.log("Response:", code, data),
  })
} 
 //const result = await getPoll("67144a73c527df736fbe5eac");
  //console.log(result);
  await getPoll(req, res);
 })();

// Uncomment this code block to test postPoll

 const { postPoll } = require("./controllers/pollController");
(async () => {
  console.log("Running postPoll()...");
 const req = {
  body: {
    ownerId: "Tyler",
    title: "Tyler's poll",
   description: "Tyler's poll description",
    options: [
     {
        option: "Poll option #1",
        count: 0,
   },
    ],
   }};
   const res = {
    status: (code) => ({
      json: (data) => console.log("Response:", code, data),
    })
   }; 
  await postPoll(req, res)}
   )();
   //console.log(result);


// Uncomment this code block to test postVote

const { postVote } = require("./controllers/pollController");

(async () => {
  console.log("Running postVote()...");
  const req = 
    {
      body: {
        pollId: "69012bfce1e30621d4595e56",
        optionId: "69012bfce1e30621d4595e57",
     },
    };
    const res = { 
      status: (code) => ({
        json: (data) => console.log('Response (${code}):', data),
      }),
    };

   await postVote(req, res);
 })();
