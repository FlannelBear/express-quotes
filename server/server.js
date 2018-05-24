// requires
const express = require('express');
const bodyParser = require('body-parser');
// globals
const app = express();
const port = 5000;

let quotes = [{
    text: '"You miss 100% of the shots you dont take - Wayne Gretzky"',
    author: 'Michael Scott'
},
{
    text: '"Which bear is best? False. The black bear."',
    author: 'Dwight Schrute'
},
{
    text: '"Things arent very nice in the clink."',
    author: `Prison Mike`
}
];
// uses
app.use( express.static('server/public'));
app.use( bodyParser.urlencoded({extended: true}));
// spin up server
app.listen(port, () => {
    console.log('server running on port:', port);
}); // end server up

// get route

app.get( '/quotes', (req, res) => {
    console.log('get hit for /quotes route');
    res.send(quotes);
});

// post route

app.post('/quotes', (req, res) => {
    console.log('post hit for /quotes route');
    quotes.push(quoteObject);
    res.send(quotes);
});