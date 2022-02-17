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

require('./routes/tutorial.routes')(app);

app.get('*', function (req, res) {
    res.status(404).send('Page not found - 404');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

