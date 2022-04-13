const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const {moviesRouter,rentsRouter} = require('./routes/movies')
const app = express();
const PORT = 5000;
 
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/movies", moviesRouter);
app.use("/rents", rentsRouter);


app.get('/',(req,res) => {
    res.send('Hello From')
})

app.listen(PORT,() => {
    console.log(`server listenening on port http://localhost:${PORT}`)
})