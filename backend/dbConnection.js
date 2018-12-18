const MongoClient = require('mongodb').MongoClient;

let _db;

module.exports = {

    connectToServer: (callback) => {
        MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true },
            (err, client) => {               
                _db = client.db('MarielMouraCRUD');
                return callback(err);
            });
    },

    getDb: () => _db,

};