const express = require("express");
const cors = require("cors");
const config = require("./config/server");
const router = require("./routes/router");
const server = express();
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello World!'));

server.use(cors());
server.use(express.json());

server.use("/api", router);

// TODO
// SETUP ACTIVITY: Put the code to connect to MongoDB below!
DB_URL = "mongodb+srv://ssudharsan_db_user:Smiles01@acm-hack-school-2025.fswfi9j.mongodb.net/acm-hack-school-2025?retryWrites=true&w=majority&appName=acm-hack-school-2025"
Port = 3001
// END SETUP ACTIVITY
server.listen(config.PORT, () => {
  console.log("Server started listening on PORT " + config.PORT);
});
const mongoose = require('mongoose');

mongoose.connect(config.DB_URL)
.then (() => console. log('Connected to MongoDB'))
.catch ((err) => console.error ('Error connecting to MongoDB: ', err));