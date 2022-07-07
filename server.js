const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

// database
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => console.log("Database Connected"))
    .catch((error) => console.log("DB connection Error: ", error));

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "2mb"}));
app.use(cors());

// route
app.get('/api', (req,res) => {
    res.json({
        data: "hello you just hit the API",
    })
})

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`))


