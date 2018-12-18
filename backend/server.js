const http = require('http');
const express = require('express');
const port = 3001;
const app = express();

const dbConnection = require('./dbConnection');
const routes = require('./routes');

//Initialize connection once
dbConnection.connectToServer((err) => {
    if (err) throw err;

    // Start the application after the database connection is ready    
    app.listen(port);
    console.log("Listening on port " + port);
});

app.use(routes);