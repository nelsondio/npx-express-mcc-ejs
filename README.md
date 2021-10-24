# npx-express-mcc-ejs
## How to Setup Express Server
#### Following the steps from Robert Wieruch public tutorials and others
#### From https://www.robinwieruch.de/javascript-project-setup-tutorial/
# TUTORIAL "Backend Setup"
## Part 1: How to JavaScript - Setup Tutorial (October, 2020)
## Part 2: The Minimal Node.js with Babel Setup (April, 2020)
## Part 3: How to Setup Express.js in Node.js (April, 2020)
## Part 4: How to Create a REST API with Express.js and Node.js (April, 2020)
## Part 5: Setup MongoDB With Mongoose in Express (April, 2020)
## Part 6: How To Handle Errors in Express (June, 2020)
## Commands Part 1
1)  mkdir the-project
2)   cd the-project
3)   npm init -y
4)   npm config list
5)   mkdir src
6)   cd src
7)   touch index.js
8)   node src/index.js
## Commands Part 2
1) npm config list
2) npm set registry http://localhost:4873
3) npm install nodemon --save-dev
4) edit package.json : under "scripts" field add "nodemon src/index.js"
5) npm install @babel/core @babel/node --save-dev
6) edit package.json : under "script" field add: "nodemon --exec babel-node src/index.js"
7) npm install @babel/preset-env --save-dev
8) in the-project's root folder: touch .babelrc
9) edit package.json add "presets":"@babel/preset-env"
10) touch .env
11) open .env and add "MY_SECRET=mysupersecretpassword"
12) npm install dotenv --save
13) edit your the-project src/index.js file
## Commands Part 3
### https://www.robinwieruch.de/node-js-express-tutorial
1) npm install express OR 
2) npx create-express-app the-npx-project
3) edit src/index.js file by adding the code to import libraries and create express server
4) COMMON ERROR: "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:3000/. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing)."
5) How to deal with it:
6) npm install cors
7) edit .env (dot env) file and add PORT=8888
## Commands Part 4
#### https://www.robinwieruch.de/node-express-server-rest-api
### Frontend -> Backend -> Database
### OR Frontend -> Backend 1 -> Backend 2 -> Database
1) curl --help
2) curl http://localhost:8888/messages
3) curl -X POST -H "Content-Type:application/json" http://localhost:8888/messages -d '{"text":"Hi again, World!!"}'
4) curl -X DELETE http://localhost:8888/messages/816494cd-90b9-4360-9b1b-653ab803bd86 -d '{"id":"816494cd-90b9-4360-9b1b-653ab803bd86"}'
### Express Routes: HTTP Methods Are REST Operations
1) GET
2) POST
3) PUT
4) DELETE
### Express Routes: URIs Are REST Resources
#### With curl you can go through the resource -- represented by one URI http://localhost:8888/users -- which offers all the CRUD operations via HTTP methods: Create, Read, Update, Delete
1) app.get = Read
2) app.post = Create
3) app.put = Update
4) app.delete = Delete
#### Making sense of the naming
1) Express Route's Method <==> HTTP Method <==> REST Operation
2) Express Route's Path <==> URI <==> REST Resource
3) Client -> REST API -> Server -> Database
### Application-level Express Middleware
1) npm install uuid
2) edit src/index.js to modify the app.post('/messages', .....) component
3) curl -X POST -H "Content-Type:application/json" http://localhost:8888/messages -d '{"text":"Hi again, World!!"}'
4) curl http://localhost:8888/messages
### Modulear Models In Express As Data Sources
1) cd src
2) mkdir models
3) cd models
4) touch index.js
### Modular Routing With Express Router
1) cd src
2) mkdir routes
3) cd routes
4) touch index.js session.js user.js message.js

## Part 5 Setup MongoDB With Mongoose in Express Tutorial
#### https://www.robinwieruch.de/mongodb-express-setup-tutorial/
#### https://www.robinwieruch.de/mongodb-express-node-rest-api/
### MongoDB With Mongoose In Express Installation
### Database Models, Schemas, And Entities
### How To Seed A MongoDB Database?
### How To Refactor Code To Connect To MongoDB: using async/await syntax

## Part 6: How To Handle Errors in Express
#### https://www.robinwieruch.de/node-express-error-handling


 


