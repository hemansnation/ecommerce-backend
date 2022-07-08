const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

// import routes
// const authRoutes = require('./routes/auth')

// app
const app = express();

// database
mongoose.connect(process.env.DATABASE_URI)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log("DB connection Error: ", error));

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "2mb"}));
app.use(cors());

// route middleware
// app.use('/api', authRoutes)

readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`))


