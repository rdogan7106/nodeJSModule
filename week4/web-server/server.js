import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router as moviesRouter } from "./controller/moviesController.js";
import { router as rentsRouter } from "./controller/rentsController.js";

const port = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/movies', moviesRouter)
app.use('/rents', rentsRouter)


app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).use("something broke!");
});

app.listen(port, () => {
 console.log(`server listening http://localhost:${port}`);
});
