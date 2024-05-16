
import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Replace with your actual MySQL password
    database: 'portfolio_db'
});

con.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Now connected to MySQL as id ' + con.threadId);
});

export default con;



