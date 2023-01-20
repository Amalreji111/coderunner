import { languages} from "../common/languages";
import { CodeAnalyser } from "./codeAnalyser/codeAnalyser.factory";

export class CodeAnalyserFactory {
    create(language) {
      switch (language) {
        case languages.JS.name:
          return new CodeAnalyser(languages.JS.name,languages.JS.extension);
        case languages.JAVA.name:
          return new  CodeAnalyser(languages.JAVA.name,languages.JAVA.extension);
        case languages.CPP.name:
          return new  CodeAnalyser(languages.CPP.name,languages.CPP.extension);
        case languages.C.name:
          return new  CodeAnalyser(languages.C.name,languages.C.extension);
        case languages.PY.name:
          return new  CodeAnalyser(languages.PY.name,languages.PY.extension);
        case languages.DART.name:
          return new  CodeAnalyser(languages.DART.name,languages.DART.extension);
        case languages.TS.name:
          return new  CodeAnalyser(languages.TS.name,languages.TS.extension);
        default:
          throw new Error(`Unsupported language: ${language}`);
      }
    }
  }