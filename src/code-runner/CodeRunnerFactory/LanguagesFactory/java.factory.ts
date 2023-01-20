import { spawn } from "child_process";
const fs=require('fs')
let path=require('path')
export class JavaCodeRunner {
    async execute(code) {
      return new Promise((resolve, reject) => {
        let inputPath=path.join(__dirname,'code.java')
        let classPath=path.join(__dirname,'main.class')
        fs.writeFileSync(inputPath, code);
        const child = spawn('java', ['-cp', classPath, inputPath]);
        let output = '';
        child.stdout.on('data', (data) => {
          output += data.toString();
        });
        child.stderr.on('data', (e) => output += e.toString());
        child.on('exit', (code) => {
          if (code === 0) {
            // fs.unlinkSync(classPath);
            fs.unlinkSync(inputPath);
            resolve(output);
          } else {
            // fs.unlinkSync(classPath);
            fs.unlinkSync(inputPath);
            reject(output);
          }
        });
      });
    }
  }