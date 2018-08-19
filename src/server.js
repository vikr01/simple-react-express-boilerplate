import 'dotenv/config';
import path from 'path';
import express from 'express';

const serverPort = process.env.PORT || 3000;

const assetsDir = path.join(__dirname, 'assets');

const app = express();

app.set('port', serverPort);

app.use(express.static(assetsDir));

app.listen(app.get('port'), err => {
  if (err) {
    throw err;
  }

  console.log(`Listening at http://localhost:${serverPort}`);
});
