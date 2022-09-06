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
            contactEmail TEXT
            )`,(err) => {
            if (err) {
            }else{
                let insert = 'INSERT INTO contact (contactName, contactNumber, contactEmail) VALUES (?,?,?)'
                db.run(insert, ["Jerry", "0700000001", "jerry@test.com"])
            }
        })
    }
})

module.exports = db