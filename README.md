# solid-api

# setup
- Install Dependencies:
```bash
sudo npm i express
```
- Install types of express:
```bash
sudo npm i @types/express
```
- Install uuidv4:
```bash
sudo npm i uuidv4
```
- Install nodemailer:
```bash
sudo npm i nodemailer
``` 
- Install types of nodemailer: 
```bash
sudo npm i @types/nodemailer -D
```

- Install Dev Dependencies:
```bash
sudo npm i typescript ts-node-dev -D
```

- Innitalization tsconfig.json
```bash
tsc --init
```
Change the property "target" in tsconfig.json to "es2017" and change the property "strict" to false.
Insert the property "allowJs" to value true.

Insert a new key in object in tsconfig.json called "include" and your value it is:
```json
  "include": [
    "src/**/*.ts"
  ]
```