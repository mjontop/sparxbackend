const express = require('express');
const PORT = process.env.PORT || 1337;

const userRoute = require('./routes/userRoute') 
const db = require('./config/db');

const app = express();

//middleware
app.use(express.json());
app.use('/api/user', userRoute);

app.listen(PORT, () => console.log('server started at', PORT));

db.sync()

db.authenticate().then(() => console.log('Conncted to DB')).catch(()=> console.log('Error in connecting DB'));
