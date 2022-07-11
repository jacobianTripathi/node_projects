// basic server
/*
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // starting server with a callback function
*/
// `...` -> called callback statement

// opening localhost:5000 will say cannot get /
// as routes have not been created...
// so creating routes before starting server

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Truck</h1>');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));