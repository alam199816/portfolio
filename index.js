
import express from 'express';
import routes from './routes/routes.js';
// import routes from './routes/validate.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
// import pool from './db.js';


// Using import.meta.url to get current module's URL and then convert it to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 7070;

// set up for static file
app.use(express.static(path.join(__dirname, 'public')));

// setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Create routes
app.use('/', routes); 
// app.use('/', validate);

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});

