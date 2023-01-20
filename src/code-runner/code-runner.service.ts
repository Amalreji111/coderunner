import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { exec, spawn } from 'child_process';
import { CreateCodeRunnerDto } from './dto/create-code-runner.dto';
import { UpdateCodeRunnerDto } from './dto/update-code-runner.dto';
import { CodeRunnerFactory } from './CodeRunnerFactory/codeRunner.factory';
import { CodeAnalyserFactory } from './CodeAnalyserFactory/codeAnalyser.factory';
const fs=require('fs')
@Injectable()
export class CodeRunnerService {
  private factory:CodeRunnerFactory;
  // private sonarFactory:CodeAnalyserFactory;
  constructor(){
    this.factory=new CodeRunnerFactory()
    // this.sonarFactory=new CodeAnalyserFactory()
  }

  async run(body: CreateCodeRunnerDto) {
    try {
      let {code,language}=body
      //i need to check here that code contains malicius code or not
      // let ln=this.sonarFactory.create(language)
      // let analyser=await ln.scan(code)
      const regex = new RegExp(/(ngrok|os|Process|process|runtime|GetrunTime|Process\.runSync|Process|node|g\+\+|javac|gpp|java|tsc|dart|nodemon|python|install|run|execute|system|systemctl|exec|spawn|fork|execfile|fs|filesystem|shutdown|reboot|restart|sudo|admin|cd|cat|nano|ls|docker|pull|jenkins|ctl|\.sh|\.bash|kubectl|minicube|helm|cron|vim|vi|git|origin|master|-b|yay|pamac|pacman|apt-get|apt|-S|-Syu|-Rns)\b/)

      // const regex = /(ngrok|Os|os|Process|process|runtime|GetrunTime|Process\.runSync|Process|node|g\+\+|javac|gpp|java|tsc|dart|nodemon|python|install|run|execute|system|systemctl|exec|spawn|fork|execfile|fs|filesystem|shutdown|reboot|restart|sudo|admin|cd|cat|nano|ls|docker|pull|jenkins|ctl|\.sh|\.bash|kubectl|minicube|helm|cron|vim|vi|git|origin|master|-b|yay|pamac|pacman|apt-get|apt|-S|-Syu|-Rns)/;
      if(regex.test(code)){
        throw new HttpException("This code may contain malicious words please check before running..!",400)

      }
      // return regex.test(code)
      const runner=this.factory.create(body.language)
      const output=await runner.execute(body.code)
      // console.log('oust',output)
      return output
    } catch (error) {
      console.log(error.message)
      throw new HttpException(error.message,400)

    }
  }
  }
