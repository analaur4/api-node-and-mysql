const express = require('express');
const connection = require('../../config/create-table');
const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
router.get('/supplier/:id', (req, res) => {
    let filter = '';
    if(req.params.id) {
        filter = ' WHERE idSupplier = ' + parseInt(req.params.id);
    }
    execSQLQuery('SELECT * FROM supplier' + filter, res);
})

function execSQLQuery(sqlQry, res) {
    connection.query(sqlQry, function(error, results, fields) {
        if (error) {
            res.json(error);
        } else {
            res.json(results);
        }

        connection.end();
        console.log('executou!');
    })
}

module.exports = router;
