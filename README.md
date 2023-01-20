<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# CodeRunner 

CodeRunner is a backend application built using NestJS framework that allows users to run and execute code in 7 different languages (JavaScript, Python, C++, Java,typescript,c, and Dart). The application has been built with security in mind and uses a factory pattern to validate the code before executing it.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v10 or higher
- [g++](https://gcc.gnu.org/) 
- [java](https://docs.oracle.com/en/java/javase/11/install/installation-jdk-microsoft-windows-platforms.html) jdk-17 or jdk-11
- [dart](https://dart.dev/) 
- typescript
- python 
- linux operating system
### Installation

1. Clone the repository: `https://github.com/Amalreji111/coderunner.git`
2. Install the dependencies: `npm install`
<!-- 3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    TELEGRAM_API_KEY=YOUR_BOT_TOKEN
    OPENAI_API_KEY=YOUR_API_KEY
    ``` -->
3.The application should now be running on http://localhost:3000
### Running the APP

1. Start the app: `nest start`

## Usage

The application exposes a single endpoint /run that accepts a POST request with a JSON payload containing the code and the language.

Example payload:
```json

{
    "code": "console.log('Hello World')",
    "language": "javascript"
}

```
The application will validate the code before executing it to ensure that it does not contain any malicious code. Once the code has been validated, it will execute the code and return the output in the response.
## Security
The application uses a factory pattern to validate the code before executing it. The factory uses a combination of regular expressions and SonarQube analysis to ensure that the code does not contain any malicious code.
## Contribution
Feel free to contribute to the project by submitting a pull request.


## Built With

- [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.



## License

Nest is [MIT licensed](LICENSE).
