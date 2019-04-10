// Application Dependencies
// ===============================================================================

/* Import Application Dependencies */
var path = require('path');
var express = require('express');
const session = require('express-session');
const mysql = require('mysql');

/* Create/Import Routes */
var indexRouter = require('./routes/index');


// Initialize Application Server
// ===============================================================================
var app = express();

// Add MiddleWare
// ===============================================================================

// Set Path to Static HTML Pages
app.use(express.static(path.join(__dirname, 'public/html/')));

// Request Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use 'express-session' to Automatically Create Cookies
var sess_options = {
	secret: 'whippersnapper' + Math.floor((Math.random() * 1000000000000) + 1),
	cookie: { secure: true, maxAge: 60000 },
	resave: false,
	saveUninitialized: true,
};
app.use(session(sess_options));

// Set Created Routes
app.use('/', indexRouter);

// Trying to configure mysql -Joseph
const db = mysql.createConnection({
	host: 'localhost',
	port: '1234',
	user: 'root',
	// password: '1234',
	// database: 'btb'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE btb';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create Table
app.get('/createtable-restraunts', (req, res) => {
    let sql = 'CREATE TABLE restraunts(id INT AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), lat INT, lan INT, category-id INT, description VARCHAR(255), phone-number VARCHAR(255), email VARCHAR(255), hours-id INT, website VARCHAR(255), main-image-id INT, main-video-id INT, PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Restraunts table created...');
    });
});



// Users Handeling

app.post('/register', (req, res) => {
	// insert user into database (This is assuming validation has been made).
	const email = req.body.email;
	const password = req.body.password;
    let sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) throw err;
        db.query(sql, [email, hash], (err, result) => {
            if(err) throw err;
            console.log(result);
            res.render('index'); //To go and go to index.html if the insertion of the user was successful...
        });
    });
});


// Export
// ===============================================================================

module.exports = app;

