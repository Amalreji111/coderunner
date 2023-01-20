import { exec, spawn } from "child_process";
const fs=require('fs')
let path=require('path')
export class PythonCodeRunner {
    async execute(code) {
        let inputPath=path.join(__dirname,'code.py')
        // let outPutPath=path.join(__dirname,'a.out')
      return new Promise((resolve, reject) => {
        fs.writeFileSync(inputPath, code);
        const child = spawn('python', [inputPath]);
        let output = '';
        child.stdout.on('data', (data) => {
          output += data.toString();
        });
        child.stderr.on('data', (e) => output += e.toString());
        child.on('exit', (code) => {
          if (code === 0) {
            fs.unlinkSync(inputPath);
            resolve(output);
          } else {
            fs.unlinkSync(inputPath);
            reject(output);
          }
        });
      });
    }
  }
  