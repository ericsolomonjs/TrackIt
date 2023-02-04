//  ---------------------------- server/app.js
// declarations
const express = require('express');
const morgan = require('morgan');
const {ENVIRONMENT, PORT} = process.env
const bodyParser = require('body-parser');
const enviroment = 'dev';

//route paths
const catsRoutes = require('./routes/catesRoutes')

const app = express();

// middleware setup
app.use(morgan(enviroment));
app.use(bodyParser.json());

//routes
app.use('/cats', catRoutes)

app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));