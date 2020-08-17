const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const db = require('./db.json');
const config = require('./config');

const app = express();
const port = 1234;

// app.use(express.static('./'));
app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // cookie-parser dùng để đọc cookies của request
app.use(
  cors({
    origin: 'http://localhost:5500', // Chan tat ca cac domain khac ngoai domain nay
    credentials: true, // Để bật cookie HTTP qua CORS
  }),
);

app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('email: ', email);

    // fake query db
    const isValidAccount = db.accounts.some(
      account => account.email === email && account.password === password,
    );
    if (!isValidAccount) {
      res.status(400).send({ message: 'Invalid account' });
      return;
    }

    const payload = { email };
    const access_token = jwt.sign(payload, config.secret);

    res.cookie('access_token', access_token, {
      maxAge: config.expire_time,
      httpOnly: true, // chỉ có http mới đọc được token
      // secure: true, //ssl nếu có, nếu chạy localhost thì comment nó lại
    });

    res.status(200).json({ email, password });
  } catch (error) {
    console.error(error);
  }
});

app.use('/api/users', (req, res) => {
  const { access_token } = req.cookies;

  console.log('access_token: ', access_token);

  try {
    const decoded = jwt.verify(access_token, config.secret);
    console.log(decoded);
    res.status(200).json(db.users);
  } catch (error) {
    res.status(1000);
    throw error;
  }
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.json(err);
});

app.listen(port, () => {
  console.info(`listening on port ${port}`);
});
