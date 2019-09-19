const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

/**
 * Mongo Flexibility:
 *      We never need to create tables/collections. It will be created on the fly.
 *  Mongo Connection Pooling:
 *      Provides sufficient connections for multiple simultaneous interactiosn with the db.
 */


let _db; // _Undescore - This will only be used internally in this file

// Connecting to Mongo db and then storing the connection
const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://jmfofragoso:fragoso44@cluster0-b61nj.mongodb.net/shop?retryWrites=true&w=majority',
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
        .then(client => {
            console.log('Connected!');
            _db = client.db()
            callback();
        })
        .catch(err => {
            console.log(err)
            throw err;
        });
};

// Return access to connected db if it exists
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!'
}

exports.mongoConnect = mongoConnect; 
exports.getDb = getDb; 

