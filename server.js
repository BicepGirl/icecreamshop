
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

console.log(stripeSecretKey, stripePublicKey)

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

const stripe = require('stripe')('sk_test_51M4LKnJ2tCzW2jbVHtqxOiO76N5UcMxlwQOfbT0CmD4ae4TL1v7FixBIovPCbI85rxHISoYRKlnJgkli364FLuiQ00hApIPy6f');
console.log(stripeSecretKey, stripePublicKey)

//Array for Cart
let cart = []


// Start server
app.listen(port, () => console.log(`Server app listening on port ${port}!`))

//CRUD FÖR KONTAKT
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
        contactEmail: req.body.contactEmail,
        contactMessage: req.body.contactMessage
    }
    let sql ='INSERT INTO contact (contactName, contactNumber, contactEmail, contactMessage) VALUES (?,?,?,?)'
    let params =[data.contactName, data.contactNumber, data.contactEmail, data.contactMessage]
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
        contactMessage: req.body.contactMessage,
        contactId: req.body.contactId
    }
    let sql ='UPDATE contact SET contactName = ?, contactNumber = ?, contactEmail = ?, contactMessage = ? WHERE contactId = ?'
    let params =[data.contactName, data.contactNumber, data.contactEmail, data.contactMessage, data.contactId]
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

//CRUD FÖR ICECREAM
app.get("/api/icecream", (req, res, next) => {
    let sql = "select * from icecream"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "icecream":rows
        })
    })
})

app.get("/api/icecream/:id", (req, res, next) => {
    let sql = "select * from icecream where icecreamId = ?"
    let params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "icecream":row
        })
    })
})

app.post("/api/icecream", (req, res, next) => {
    let data = {
        icecreamName: req.body.icecreamName,
        icecreamPrice: req.body.icecreamPrice,
        icecreamFlavour: req.body.icecreamFlavour,
        icecreamContent: req.body.icecreamContent,
        icecreamDescription: req.body.icecreamDescription,
        icecreamImg: req.body.icecreamImg,
        icecreamFavorite: req.body.icecreamFavorite
    }
    let sql ='INSERT INTO icecream (icecreamName, icecreamPrice, icecreamFlavour, icecreamContent, icecreamDescription, icecreamImg,icecreamFavorite ) VALUES (?,?,?,?,?,?,?)'
    let params =[data.icecreamName, data.icecreamPrice, data.icecreamFlavour, data.icecreamContent, data.icecreamDescription, data.icecreamImg, data.icecreamFavorite]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "icecream": data,
            "id" : this.lastID
        })
    })
})

app.put("/api/icecream", (req, res, next) => {
    let data = {
        icecreamName: req.body.icecreamName,
        icecreamPrice: req.body.icecreamPrice,
        icecreamFlavour: req.body.icecreamFlavour,
        icecreamContent: req.body.icecreamContent,
        icecreamDescription: req.body.icecreamDescription,
        icecreamImg: req.body.icecreamImg,
        icecreamId: req.body.icecreamId,
        icecreamFavorite: req.body.icecreamFavorite
    }
    let sql ='UPDATE icecream SET icecreamName=?, icecreamPrice=?, icecreamFlavour=?, icecreamContent=?, icecreamDescription=?, icecreamImg=?,icecreamFavorite=?  WHERE icecreamId=?'
    let params =[data.icecreamName, data.icecreamPrice, data.icecreamFlavour, data.icecreamContent, data.icecreamDescription, data.icecreamImg,data.icecreamFavorite, data.icecreamId]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "icecream": data,
            "id" : this.lastID
        })
    })
})

app.delete("/api/icecream", (req, res, next) => {
    db.run(
        'DELETE FROM icecream WHERE icecreamId = ?',
        req.body.icecreamId,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", rows: this.changes})
        })
})

app.get("/api/products"), async(req, res, next) => {

   const products = await stripe.products.list({
    limit: 3
   })

   
}


app.get("/api/cart"), async(req, res, next) => {
    res.json({ message: "Add item to cart" });
    }



