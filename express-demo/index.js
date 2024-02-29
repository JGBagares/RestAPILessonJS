const express = require('express');
const app = express();

const flavors = [
    {id: 1, flavor: 'vanila'},
    {id: 2, flavor: 'chocolate'},
    {id: 3, flavor: 'red velvet'},
    {id: 4, flavor: 'cheesecake'}
];

app.get('/', (req, res) =>  {
    res.send('Hello World');
});

app.get('/api/flavor', (req,res)=> {
    res.send(flavors);
});

app.get('/api/flavor/:id', (req,res) => {
    const flavor = flavors.find(c => c.id === parseInt(req.params.id));
    if (!flavor) res.status(404).send('the flavor witht the given id is not found');
    res.send(flavor);
})


const port = process.env.PORT || 2000;

app.listen(port, ()=> console.log(`Listening on port ${port}`));