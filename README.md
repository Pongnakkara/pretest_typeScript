# pretest_typeScript <br>
<p>This repo is made for submit pretest for internship</p>

<h1>follow step for execute</h1>
<p>1.Initializing a new npm project</p>

```
npm init -y
```
<p>2.Install Jest for testing </p>

```
npm install --save-dev jest @types/jest ts-jest
```

<p>3.adjsut code in package.jason</p>
before: <br>

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
after:

```
 "scripts": {
    "test": "jest"
  },
```

#dont forgot load file jest.config.js in to project
