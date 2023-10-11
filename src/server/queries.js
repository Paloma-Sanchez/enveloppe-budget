
const {Pool} = require('pg');
const { v4 } = require ("uuid");


const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'enveloppe-budget',
  password: 'password',
  port: 5432,
});

/*************** Enveloppes Table ***************/
//GET all enveloppes
const getAllEnveloppes = (req, res ) => {
    pool.query('SELECT * FROM enveloppes ORDER BY name', (error, result) => {
        if (error) {
            throw error
          }
          res.status(200).json(result.rows);
    })
};

//POST new Enveloppe
const createEnveloppe = (req, res) => {
    const {name, budget} = req.body;
    const id = v4();

    pool.query('INSERT INTO enveloppes VALUES($1, $2, $3) RETURNING *',[id, name, budget], (error, result) => {
        if (error) {
            throw error
          };
          res.status(201).send(`Enveloppe ${result.rows[0].name} added`)
    })
}

//PUT modify existing Enveloppe by id
const substractFromEnveloppe = async (req, res) => {
  const{budget, amount} = req.body;
  const env_id = req.params.env_id;
  const newBudget = budget - amount;

  pool.query('UPDATE enveloppes SET budget = $1 WHERE id = $2', [newBudget, env_id], (error, result) => {
    if (error) {
      throw error
    };
    res.status(200).send(`Enveloppe id ${env_id} budget ${newBudget} modified`)
  })
}

//PUT manually change budget
const updateEnveloppe = (req, res) => {
  const {updatedBudget} = req.body;
  const env_id = req.params.env_id;

  pool.query('UPDATE enveloppes SET budget = $1 WHERE id = $2', [updatedBudget, env_id], (error, result) => {
    if (error) {
      throw error
    };
    res.status(200).send(`Enveloppe id ${env_id} budget ${updatedBudget} modified`)
  })
}

//DELETE an enveloppe by Id
const deleteEnveloppe = (req, res) => {
  const env_id = req.params.env_id;
  pool.query('DELETE FROM enveloppes WHERE id = $1', [env_id], (error,result) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Enveloppe with Id: ${env_id} deleted`);
  })
}

/*************** Transactions Table ***************/
//GET transactions for an enveloppe_id
const getTransactionsByEnveloppeId = (req, res) => {
  const env_id = req.params.env_id;

  pool.query('SELECT * FROM transactions WHERE enveloppe_id = $1', [env_id], (error, result) => {
      if (error) {
          throw error
        }
        res.status(200).json(result.rows);
  })
};

//POST transaction
const createNewTransaction = (req, res, next) => {
  const env_id = req.params.env_id;
  const {description, amount} = req.body;
  const id = v4();
  pool.query('INSERT INTO transactions VALUES($1, $2, $3, $4)', [id, env_id, description, amount], (error, result) => {
    if (error) {
      throw error
    };
    next();
  })
};

//DELETE transaction by Id
const deleteTransactionById = (req, res) => {
  const trans_id = req.params.trans_id;
  pool.query('DELETE FROM transactions WHERE id = $1', [trans_id], (error,result) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Transaction with Id: ${trans_id} deleted`);
  })
}

module.exports = {getAllEnveloppes, 
                  createEnveloppe, 
                  getTransactionsByEnveloppeId,
                  createNewTransaction,
                  updateEnveloppe,
                  deleteEnveloppe,
                  deleteTransactionById,
                  substractFromEnveloppe};