const con = require('../database/db');
 
//Route to login form 
exports.loginuser = (req, res) => {
    const {username, password} = req.body;
    con.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (err, result) => {
      if (err) {
        console.err('Login failed ');
        res.status(500).send('Internal Server Error');
        return;
      }
      if (result.length > 0) {
        res.redirect('/home');
        } else {
          res.render('login', {errorMessage: 'Invalid username or password'});
      }
    });
    
  };