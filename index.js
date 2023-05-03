const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allChef = require('./data/allChef.json');
const chefInfo = require('./data/chefInfo.json');

app.use(cors());


// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.get('/', (req, res) => {
//     res.send('hello world')
// })
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/allChef/:id', (req, res) => {
    res.send(allChef)
})

app.get('/chefInfo', (req, res) => {
    res.send(chefInfo)
})

app.get('/chefInfo/:id', (req, res) => {
    const id = parseInt( req.params.id);
    console.log(id);

    const selectedInfo = chefInfo.find(info => parseInt(info.id) == id);
    res.send(selectedInfo);
})

app.listen(port, () => {
    console.log(`my server is running on port: ${port}`)
})