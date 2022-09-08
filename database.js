const sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "shop.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE contact (
            contactId INTEGER PRIMARY KEY,
            contactName TEXT,
            contactNumber TEXT,
            contactEmail TEXT,
            contactMessage TEXT
            )
            CREATE TABLE icecream (
            icecreamId INTEGER PRIMARY KEY,
            icecreamName TEXT,
            icecreamPrice INTEGER,
            icecreamFlavour TEXT,
            icecreamContent TEXT,
            icecreamDescription TEXT
            )`,(err) => {
            if (err) {
            }
        })
    }
})

module.exports = db