const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json({ limit: "1mb" }));

let authors = [{
    "_id": "3hj9ecwzc5",
    "name": "Alan",
    "title": "Eloquent JavaScript, Second Edition"
},
{
    "_id": "ii3v6javys",
    "name": "Albert",
    "title": "Le début d'un nouveau",
}
];

// get all authors
app.get('/authors', (req, res) => {
    res.json(authors);
});

// store new Author
app.post('/author', (req, res) => {
    const { name, title } = req.body;

    authors.push(req.body);

    res.json({
        status: 'success',
        name: name,
        title: title
    });
});

// get author 
app.get('/author/:id', (req, res) => {
    const { id } = req.params;
    const author = authors.filter(author => author._id === id);

    if (author.length > 0)
        res.json({
            status: 'success',
            id: id,
            author: JSON.stringify( authors.filter(author => author._id === id)[0] )
        });

    res.status(404).send('Author not found');
});

// delete author
app.delete('/author/:id', (req, res) => {
    const { id } = req.params;
    const author = authors.filter(author => author._id !== id);

    if ( author.length > 0 )
        res.json({
            status: 'success deleted author',
            id: id,
            author: JSON.stringify(author)
        });

    res.status(404).send('Author not found');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

