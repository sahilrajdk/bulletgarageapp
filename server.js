const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const cors = require("cors");
//mongoose models
const graphqlSchemas = require("./graphql/schemas/index");
const graphqlResolvers = require("./graphql/reslovers/index");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchemas,
    rootValue: graphqlResolvers,
    graphiql: true
  })
);

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err));

//app.get("/", (req, res) => res.send("hello wors"));

//app.use("/api/jobcards", jobcards);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
