const express = require('express');
const cors = require('cors')

const PORT = process.env.PORT || 4001;
const app = express();

var corsOptions = {
    origin: `https://localhost:${PORT}/`,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/tutorial.routes')(app);
require('./routes/ressource.routes')(app);
require('./routes/category.routes')(app);
require('./routes/comment.routes')(app);


app.get('/', (req, res) => {
    res.send('Hello API!');
})

app.get('*', function (req, res) {
    res.status(404).send('Page not found - 404');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

