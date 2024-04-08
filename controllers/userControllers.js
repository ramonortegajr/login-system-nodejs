const con = require('../database/db');
 
//script to check the login to the system
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

//script to insert data to the database
exports.signupuser = (req,res) => {
  const {email, username, password} = req.body;
  if (!email || !username || !password ) {
    res.status(400).send('Please fill out all the required fields.');
    return;
  }
  const sql = 'INSERT INTO accounts (username, password, email) VALUES(?,?,?)';
  con.query(sql, [email, username, password], (err, result) => {
  if (err) {
    console.error('Error inserting data into MySQL', err);
    res.send("There was an erro with your registration");
    return;
  }
  console.log('Data inserted successfully', result);
  res.redirect('/login');
});
};
