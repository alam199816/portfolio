// db.js
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const con = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio_db'
});

con.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Now connected to MySQL as id ' + con.threadId);
});

export default con;
