import { spawn } from 'child_process'
import { command } from 'yargs';
import { Responsetype } from './types'

export const execmd = (cmd: string, args: string, cb: (err: string | undefined, res: Responsetype | undefined) => void) => {
  const comand = spawn (cmd, [args])
  let fin: string = '';

  comand.on('err', (err) => {
    cb(err.message, undefined);
  });

  comand.stdout.on('data', (data) => {
    fin += data.toString('utf8');
    let x = JSON.stringify(fin);
    console.log(x)
  });


  const response: Responsetype = {
    finish: fin,
  };

  cb(undefined, response);
};