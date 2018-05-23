// requires
const express = require('express');
const bodyParser = require('body-parser');
// globals
const app = express();
const port = 5000;
// uses
app.use( express.static('server/public'));

// spin up server
app.listen(port, () => {
    console.log('server running on port:', port);
}); // end server up

// get route

// post route