# pretest_typeScript <br>
<p>This repo is made for submit pretest for internship</p>

<h1>follow step for execute</h1>
<p>Initializing a new npm project</p>

```
npm init -y
```
<p>Install Jest for testing </p>

```
npm install --save-dev jest @types/jest ts-jest
```

<p>adjsut code in package.jason</p>
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
