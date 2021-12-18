import express from "express";
import path from 'path';
import cors from 'cors';


const app = express();


// define directory name
const __dirname = path.resolve();

// add it to read .css, .js etc
app.use(express.static(__dirname + "/static"));

// Set ejs config
app.set( "view engine", "ejs" );

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Port
const PORT = process.env.PORT || 443 ;

// Listening to server
app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`)   
});