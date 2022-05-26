const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const csvtojson = require("csvtojson");
const User = require("./models/User");

const app = express();
const port = process.env.PORT || 5000;


//  BodyPasrer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// DB Config
const db = require("./config/keys").MongoURI;

// Connect to Mongo
const connectDB = async () => {
  await mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
};
connectDB();

// CSV file 
const fileName = "humanz-ex-users.csv";
var arrayToInsert = [];
csvtojson()
  .fromFile(fileName)
  .then((source) => {
    // Fetching the all data from each row
    for (let i = 0; i < 120; i++) {
      let oneRow = {
        Name: source[i]["Name"],
        ID: source[i]["ID"],
        Phone: source[i]["Phone"],
        IP: source[i]["IP"],
      };
      arrayToInsert.push(oneRow);
    }
  });

// Routes
app.get("/users", (req, res) => {
  User.find({}, function (err, result) {
    if (err) return throws(err);
    res.send(result);
  });
});

app.post("/users", (req, res) => {
  User.create(
    {
      Name: req.body.Name,
      ID: req.body.ID,
      Phone: req.body.Phone,
      IP: req.body.IP,
    },
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ err: err });
        return;
      }
      console.log(result);
      res.status(200).json(result);
    }
  );
});

app.delete("/users/:id", (req, res) => {
  const id_delete = req.params.id;
  User.deleteOne({ ID: id_delete }, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ err: err });
      return;
    }
    res.status(200).json({ ok: true });
    console.log(id_delete, results);
  });
});



app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
