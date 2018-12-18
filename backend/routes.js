const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./dbConnection');
const jsonParser = bodyParser.json();
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
})

router.get("/", (req, res) => {
    res.send("MarielMouraCRUD Transactions API")
});

router.route('/transactions').
    get((req, res) => {
        dbConnection.getDb().collection('transactions').find({}).toArray((err, transactions) => {
            if (err) throw res.send(err);
            res.send(transactions);
        });
    })
    .delete(jsonParser, (req, res) => {
        const transactionToDelete = req.body;
        dbConnection.getDb().collection('transactions').deleteOne(transactionToSave, (err, result) => {
            if (err) throw res.send(err);
            res.end();
        })
    })
    .post(jsonParser, (req, res) => {
        const transactionToSave = req.body;
        dbConnection.getDb().collection('transactions').insertOne(transactionToSave, (err, result) => {            
            if (err) throw res.send(err);
            res.end();
        });
    })
    .put(jsonParser, (req, res) => {
        const transactionToUpdate = req.body;
        dbConnection.getDb().collection('transactions').updateOne(transactionToSave, (err, result) => {
            if (err) throw res.send(err);
            res.end();
        });
    });

    module.exports = router