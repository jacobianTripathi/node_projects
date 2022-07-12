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
/*
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Truck</h1>');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
*/

// using path package to send file instead of res.send
/*
const express = require('express');
const path = require('path');   // this package makes file path writing easier
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // and add file at specified place
    // note __dirname is the current directory
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}.`));
*/

// for static pages express already has a way instead of manually adding statics in get (routes)
// so here we will set public as a static folder by using use()
// use() is used to create middleware
/*
const express = require('express');
const path = require('path');   // this package makes file path writing easier
const app = express();
// express.static(file path);
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}.`));
// this will still work the same as previous commented section
*/

// usually express will not be used to do these things but to create some REST api
// so now a very basic, non DB connected REST api will be made

const express = require('express');
const path = require('path');   // this package makes file path writing easier
const app = express();
const members = [
    {
        id: 1,
        name: "A1",
        email: "A1@email.com",
        status: 'active'
    },
    {
        id: 2,
        name: "A2",
        email: "A2@email.com",
        status: 'inactive'
    },
    {
        id: 3,
        name: "A3",
        email: "A3@email.com",
        status: 'inactive'
    },
    {
        id: 4,
        name: "A4",
        email: "A4@email.com",
        status: 'active'
    }
];
app.get('/api/members', (req, res) => {
    res.json(members);
});
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}.`));