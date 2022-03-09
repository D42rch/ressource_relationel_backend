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
require('./routes/commentreact.routes')(app);
require('./routes/message.routes')(app);
require('./routes/permission.routes')(app);
require('./routes/reaction.routes')(app);
require('./routes/relationshiptype.routes')(app);
require('./routes/reportcomment.routes')(app);
require('./routes/ressourcecomment.routes')(app);
require('./routes/ressourcetype.routes')(app);
require('./routes/role.routes')(app);


app.get('/', (req, res) => {
    res.send('Hello API!');
})

app.get('*', function (req, res) {
    res.status(404).send('Page not found - 404');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

