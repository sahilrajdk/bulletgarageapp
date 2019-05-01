const express = require("express");
const mongoose = require("mongoose");
const graphqlHttp = require("express-graphql");

const bodyParser = require("body-parser");
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

//server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
