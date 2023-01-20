import { exec, spawn } from "child_process";
const fs=require('fs')
export class DartCodeRunner {
    async execute(code) {
      return new Promise((resolve, reject) => {
        fs.writeFileSync('code.dart', code);
        const child = spawn('dart', ['code.dart']);
        let output = '';
        child.stdout.on('data', (data) => {
          output += data.toString();
        });
        child.stderr.on('data', (e) => output += e.toString());
        child.on('exit', (code) => {
          if (code === 0) {
            resolve(output);
          } else {
            reject(output);
          }
        });
      });
    }
  }
  