// // routes.js
import express from 'express';
import { homeController } from '../controllers/homeController.js';
import bodyParser from 'body-parser';
import con from '../db/db.js';

const routes = express.Router();

// Middleware to parse form data
routes.use(bodyParser.urlencoded({ extended: true }));

// Define route for form submission
routes.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Define the SQL query
  const sql = 'INSERT INTO folio (name, email, subject, message) VALUES (?, ?, ?, ?)';

  // Insert data into the database
  con.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Data inserted into the database');

      // Send a response with a success message
      const successMessage = 'Message sent successfully!';
      res.status(200).send(successMessage);
    }
});
});

routes.get('/', homeController);

export default routes;
