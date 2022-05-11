import { spawn } from 'child_process';
import * as express from 'express';
import { join } from 'path';
import { execmd } from './comand';

const app = express();

app.use(express.static(join(__dirname, '../app/public')));

app.get('/app', (_, res) => {
  res.send('<h1>My application</h1>');
});

app.get('/execmd', (req, res) => {
  console.log(req.query)
  if (!req.query.cmd) {
    return res.send({
      error: 'A title has to be provided',
    });
  }else{
    execmd(req.query.cmd as string, req.query.args as string,  (err, data) => {
      if (err) {
        res.send('<h1>Ha ocurrido un error con el comando/fichero</h1>');
      } else if(data) {
        res.send(data?.finish);
      }
  });
}
});

app.get('*', (_, res) => {
  res.send('<h1>404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});