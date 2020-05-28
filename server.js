const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000

// Connect Database
connectDB();


// Init Middleware

app.use(express.json({extended : false}));

// Define Routes

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/profiles',require('./routes/api/profiles'));

app.get('/',(req,res) => res.send('API running'));

app.listen(PORT,() => console.log(`Server started at port ${PORT}`));