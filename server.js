const express = require("express")
const app = express()
const cors = require('cors')
const db = require("./database.js")

app.use(cors())
app.use(express.static('public'))

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = 3000

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get("/api/contacts", (req, res, next) => {
    let sql = "select * from contact"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "contact":rows
        })
    })
})


app.get("/api/contacts/:id", (req, res, next) => {
    let sql = "select * from contact where contactId = ?"
    let params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "contact":row
        })
    })
})


app.post("/api/contacts", (req, res, next) => {
    let data = {
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        contactEmail: req.body.contactEmail
    }
    let sql ='INSERT INTO contact (contactName, contactNumber, contactEmail) VALUES (?,?,?)'
    let params =[data.contactName, data.contactNumber, data.contactEmail]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "contact": data,
            "id" : this.lastID
        })
    })
})

app.put("/api/contacts", (req, res, next) => {
    let data = {
        contactName: req.body.contactName,
        contactNumber: req.body.contactNumber,
        contactEmail: req.body.contactEmail,
        contactId: req.body.contactId
    }
    let sql ='UPDATE contact SET contactName = ?, contactNumber = ?, contactEmail = ?, WHERE contactId = ?'
    let params =[data.contactName, data.contactNumber, data.contactEmail, data.contactId]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "contact": data,
            "id" : this.lastID
        })
    })
})

app.delete("/api/contacts", (req, res, next) => {
    db.run(
        'DELETE FROM contact WHERE contactId = ?',
        req.body.contactId,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", rows: this.changes})
        })
})