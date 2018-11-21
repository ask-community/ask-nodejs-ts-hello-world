# Alexa Skill: Hello World (TypeScript)
The project is based on the HelloWorld skill template used when you execute `ask new -n <skill-name>` but it has been modified to work with TypeScript. 

Maybe for the first time in a template, you get the benefits of:
- [TypeScript](https://www.typescriptlang.org/)
- [ASK SDK v2](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
- [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)

## Set up your Computer
Install/register for the following:
- Node.js (v8.10.0)
- NPM
- Git
- Amazon Developer Account
- AWS Account
- TypeScript
- AWS CLI (including `aws configure`)
- ASK CLI (including `ask init`)

## Get the Code

Clone the repo

    ```bash
    $ git clone https://github.com/ask-community/ask-nodejs-ts-hello-world.git my-skill-name

    $ cd my-skill-name/lambda/custom
    $ npm install
    ```


## Compile the TypeScript
The template is already configured for TypeScript. From the `my-skill-name/lambda/custom` folder, start the build.


folder: `my-skill-name/lambda/custom`
```bash
$ npm run build
```
The `build` command does the following:
- executes the TypeScript compiler (`tsc`)
- creates a `dist` folder
- copies all the JavaScript generate from the `.ts` files into `dist`
- copies the `package.json` file to `dist`
- runs `npm install` inside the `dist` folder

Now all the TypeScript is compiled into JavaScript and the `node_modules` folder contains the needed packages.

## Deploy the Skill
From the root folder (where `.ask` folder is), execute the command to deploy the skill:

folder: `root`
```bash
ask deploy
```

This will:
- Deploy the skill info (`skill.json`)
- Deploy the skill model (`models/en-US.json`)
- Zip up the `dist` folder
- Deploy the zip to lambda
- Update the `.ask/config` file
