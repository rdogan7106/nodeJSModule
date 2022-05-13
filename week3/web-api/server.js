const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const moviesRouter = require("./routes/moviesRouter.js");
const rentsRouter = require("./routes/rentsRouter.js");
const port = process.env.port || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/movies", moviesRouter);
app.use("/rents", rentsRouter);

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.listen(port, () => {
  console.log(`server listening on port  http://localhost:${port}`);
});
