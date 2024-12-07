// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// Make a function that reads the comments.json file and returns the comments as an array of objects. 

const http = require('http'); 
const fs = require('fs');
const path = require('path');

