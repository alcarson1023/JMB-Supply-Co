// // const bodyParser = require('body-parser')
// const express = require("express");
// // const passport = require("passport");
// // const session = require("express-session");
// // const Auth0Strategy = require("passport-auth0");
// // const controller = require("./controller");
// const massive = require("massive");
// require("dotenv").config();
// const { json } = require("body-parser");
// // const path = require("path");
// // let request = require("request");
// // let querystring = require("querystring");

// let port = process.env.PORT || 3001; //the server it’s running on. It’s better to avoid 3000 because that’s the default. Try and leave it open for other programs to use.

// let app = express();

// const cors = require("cors");

// app.use(cors()); //he skipped over this too quickly.
// app.use(json());

// massive(process.env.CONNECTION_STRING)
//   .then(db => {
//     app.set("db", db);
//   })
//   .catch(err => console.log(err));

// app.get("/api/all_playlists", (req, res, next) => {
//   const db = req.app.get("db");
//   db.get_playlists()
//     .then(response => {
//       console.log("Got all playlists: ", response);
//       res.status(200).send(response);
//     })
//     .catch(err => {
//       console.log("Something went wrong: ", err);
//       res.status(500).send("Error");
//     });
// });

// console.log(`Listening on port ${port}.`);
// app.listen(port);

const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();

let port = process.env.PORT || 3001;

let app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.get("/api/all_playlists", (req, res, next) => {
  const db = req.app.get("db");
  db.get_playlists()
    .then(response => {
      console.log("Got all playlists: ", response);
      res.status(200).send(response);
    })
    .catch(err => {
      console.log("Something went wrong: ", err);
      res.status(500).send("Error");
    });
});

console.log(`Listening on port ${port}.`);
app.listen(port);
