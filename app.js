const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

//get the login page
app.get('/login', (req, res) => {
    res.render('login');
});
//redirect to dashboard after successful login
app.get('/home', (req, res) => {
    res.render('home');
});

const routes = require('./routes/userRoutes');
app.use('/', routes);
const port = process.env.PORT || 5004;
app.listen(port, () => console.log(`Listening on ${port}`));