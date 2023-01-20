import { languages } from "../common/languages";
import { CCodeRunner } from "./LanguagesFactory/c.factory";
import { CppCodeRunner } from "./LanguagesFactory/cpp.factory";
import { DartCodeRunner } from "./LanguagesFactory/dart.factory";
import { JavaCodeRunner } from "./LanguagesFactory/java.factory";
import { JavaScriptCodeRunner } from "./LanguagesFactory/javascript.factory";
import { PythonCodeRunner } from "./LanguagesFactory/python.factory";
import { TypescriptCodeRunner } from "./LanguagesFactory/Typescript.factory";

export class CodeRunnerFactory {
    create(language) {
      switch (language) {
        case languages.JS.name:
          return new JavaScriptCodeRunner();
        case languages.JAVA.name:
          return new JavaCodeRunner();
        case languages.CPP.name:
          return new CppCodeRunner();
        case languages.C.name:
          return new CCodeRunner();
        case languages.PY.name:
          return new PythonCodeRunner();
        case languages.DART.name:
          return new DartCodeRunner();
        case languages.TS.name:
          return new TypescriptCodeRunner();
        default:
          throw new Error(`Unsupported language: ${language}`);
      }
    }
  }