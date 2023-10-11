const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;
const db = require('./queries');
var cors = require('cors');

app.use(cors());

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

/////// ENVELOPPES table
app.get('/enveloppes', db.getAllEnveloppes);
app.post('/newEnveloppe', db.createEnveloppe);
app.delete('/enveloppes/:env_id', db.deleteEnveloppe);
app.put('/enveloppes/:env_id', db.updateEnveloppe);

/////// TRANSACTIONS table
app.get('/enveloppes/:env_id', db.getTransactionsByEnveloppeId);
app.post('/enveloppes/:env_id', db.createNewTransaction, db.substractFromEnveloppe);
app.delete('/enveloppes/transactions/:trans_id', db.deleteTransactionById);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})