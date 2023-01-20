import { SonarQubeScanner } from 'sonarqube-scanner';

export class CodeAnalyser{
    private language:string;
    private extension:string;
    private code:string;
    private sonarScanner:SonarQubeScanner
    constructor(language:string,extension:string,code=""){
        this.extension=extension;
        this.language=language;
        this.code=code;
        this.sonarScanner=new SonarQubeScanner()
    }
   async scan(code){
    this.code=code;
            try {
              const analysis = await this.sonarScanner.scan({
                'projectBaseDir': __dirname,
                'projectKey': process.env.SONARQUBE_KEY,
                'projectName': 'coderunner',
                'sources': [this.code]
              });
              if(analysis.status !== 'success'){
                throw new Error('SonarQube scan failed');
              }
            
            } catch (error) {
              console.log(error)
             throw new Error(error.message)
            }
          }
}
