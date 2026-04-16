## check node version 
 ### node --v

## what is server 
1. server is a machine is will created for when user get any request we will give response


## What is packages
 -- create by someone other we can use it directly it store npm.js website

 ## What is package.json && package-lock.json
 1. Package.json is a file where all present all project dependencies
 2. Package-lock.json is a file where present package tree dependencies like a package is also depend on another package 

 ## to start the server first we have to run a cammand 
 npm init -y

## With the Express.js we can start a server very easly 
install express (npm i express) it will take the package into node_module folder

1. First we have to create server
```js
const express = require('express')
const app = express() 
app.get("/", (req,res) =>{
    res.send("hello world")   
})

app.get("/about", (req,res) =>{
    res.send("About Page")
})

app.listen(3000, =>{
    console.log('Server is running on port 3000')
})




