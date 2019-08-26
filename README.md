# Node.js

Node.js run JS from the server and return data that the users can use.

Node.js is a JS Runtime, so is not limited to the Server!
Can be used for utility scripts, build tools.

## Installation

Install [Brew](https://brew.sh/): 
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew -v
```
Install [Node](https://nodejs.org/en/):
```bash
brew install node
node -v
```
Install nodemon
```bash
npm install nodemon --save-dev
```
## Usage
```bash
node file_name.js
```

## Contributing
External pulls are not allowed.

This is a study book, with exercises and theory in the comments. 

## Topics

* Basics - How it generally works, how we can work with streams of data and some core node.js modules
* Efficient Development - How you can debug your code, handle errors and so on
* Express.js - The most popular framework it makes things easier
* Templating Engines - tools that generate html pages on the server with dynamic content encoded in them and that is how you can return different pages or pages with different content back to the users.
* MVC - Model View Controller
* Advanced Routes & Models - Models of the MVC pattern
* SQL - MySQL Database
* Sequelize
* MongoDB
* Mongoose
* Sessions & Cookies
* Authentication
* Sendind E-Mails
* Advance Authentication - authorization
* User Input Validation - Data your users enter into your forms is correct and valid
* Error Handling
* File Uploads & Downloads
* Pagination - Data in Chunks instead of all the data at once for optimization of bandwidth
* Async Requests
* Payments
* REST API Basics
* Advanced REST API Features
* Async-await
* Websockets & Socket.io - allows you to add real time functionalities, for example notifications 
* GraphQL API - Modern way of API with advantages over REST
* Deployment - Real server, setting up SSL encryption
* Web Servers

## License
This course has been taken from:
[Udemy](https://www.udemy.com/course/nodejs-the-complete-guide/) 2019
