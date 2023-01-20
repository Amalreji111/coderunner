import { exec, spawn } from "child_process";
const fs=require('fs')
let path=require('path')
export class CppCodeRunner {
    async execute(code) {
      return new Promise((resolve, reject) => {
        let inputPath=path.join(__dirname,'code.cpp')
        let outPutPath=path.join(__dirname,'a.out')
        fs.writeFileSync(inputPath, code);
        const child = spawn('g++', ['-o', outPutPath, inputPath]);
        let output = '';
        child.stdout.on('data', (data) => {
          output += data.toString();
        });
        child.stderr.on('data', (e) => output += e.toString());
        child.on('exit', (code) => {
          if (code === 0) {
        const subchild = spawn(outPutPath);
        let out=''
        subchild.stderr.on("data",(data)=>{
           out+=data.toString() 
        })
        subchild.stdout.on("data",(data)=>{
            out+=data.toString() 

        })
        subchild.on("exit",(code)=>{
            if(code==0){
                fs.unlinkSync(outPutPath);
                fs.unlinkSync(inputPath);
                resolve(out);

            }else{
                fs.unlinkSync(outPutPath);
                fs.unlinkSync(inputPath);
                reject(out)
            }
        })
          } else {
            reject(output);
          }
        });
      });
    }
  }