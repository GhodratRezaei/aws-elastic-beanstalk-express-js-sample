const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Full Test end-to-end PipeLine from source to the deployment.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
