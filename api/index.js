const express = require("express");
const morgan = require("morgan");

const db = require("./config/db");
const modules = require("./models");

const routes = require("./routes");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening ON ${PORT}`));
});
