import { exec, spawn } from "child_process";
const fs=require('fs')
export class TypescriptCodeRunner {
    async execute(code) {
      return new Promise((resolve, reject) => {
        fs.writeFileSync('code.ts', code);
        const child = spawn('tsc', ['code.ts']);
        let output = '';
        child.stdout.on('data', (data) => {
          output += data.toString();
        });
        child.stderr.on('data', (e) => output += e.toString());
        child.on('exit', (code) => {
          if (code === 0) {
            fs.unlinkSync('code.ts');
            resolve(output);
          } else {
            reject(output);
          }
        });
      });
    }
  }
  