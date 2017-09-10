const express = require('express');

// Init App
const app = express();

// Load Engine
app.set('views', )

// Home Route
app.get('/', (req, res) => {
    res.send('Hello Express');
});


// Start Server
app.listen(3000, () => {
    console.log('Server started on 3000...');
});
