const express = require('express');
const { Sequelize } = require('sequelize');
const dbConfig = require('./config.json')
const app = express(); // this function call creates a new express application
const port = 3000;
const env = "development";
const dbSettings = dbConfig[env];
const sequelize = new Sequelize(
    dbSettings.database, 
    dbSettings.username,
    dbSettings.password,
    dbSettings
);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

/*
 setup sequalize with mysql in express: https://medium.com/@prajramesh93/getting-started-with-node-express-and-mysql-using-sequelize-ed1225afc3e0
*/

// localhost:3000