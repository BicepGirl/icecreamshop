const sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "shop.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    }else{

        console.log('Running table for contact.')
        db.run(`
            CREATE TABLE contact (
            contactId INTEGER PRIMARY KEY,
            contactName TEXT,
            contactNumber TEXT,
            contactEmail TEXT,
            contactMessage TEXT
            )`,(err) => {
            if (err) {
            }else{
                // Table just created, creating some rows
                let insert = 'INSERT INTO contact (contactName, contactNumber, contactEmail, contactMessage) VALUES (?,?,?,?)'
                db.run(insert, ["Seb","0700000001","seb@test.se","Hej"])
            }
        })

        console.log('Running Table for icecream.')
        db.run(`
            CREATE TABLE icecream (
            icecreamId INTEGER PRIMARY KEY,
            icecreamName TEXT,
            icecreamPrice INTEGER,
            icecreamFlavour TEXT,
            icecreamContent TEXT,
            icecreamDescription TEXT,
            icecreamImg TEXT,
            icecreamFavorite TEXT
            )`,(err) => {
            if (err) {
            }else{
                // Table just created, creating some rows
                let insert = 'INSERT INTO icecream (icecreamName, icecreamPrice, icecreamFlavour, icecreamContent, icecreamDescription, icecreamImg,icecreamFavorite) VALUES (?,?,?,?,?,?,?)'
                db.run(insert, ["Chocolate Choke",
                    10,
                    "Chocolate",
                    "CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR. Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.",
                    "The scoops of various chocolate ice cream scoops in a wafer, chocolate sprinkles, cookie crumble ans mini marshmellows",
                    "img/chocolate_choke.jpg",
                false])

                db.run(insert, ["Plain Jane",
                    10,
                    "Vanilla",
                    "CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR. Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.",
                    "Thee small scoops of traditionall vanilla ice cream topped with sprinkles",
                    "img/plain_jane.jpg",
                    false])

                db.run(insert, ["Strawberry Jerry",
                    10,
                    "Vanilla, Strawberry",
                    "CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR. Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.",
                    "Vanilla and strawberry ice cream topped with fresh strawberry and raspberry",
                    "img/strawberry_jerry.jpg",
                    false])

                db.run(insert, ["Unicorn Droppings",
                    10,
                    "lime, strawberry, blueberry ",
                    "CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR. Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.",
                    "three scoops of mixed sorbet flavors in a wafer",
                    "img/unicorn_droppings.jpg",
                    false])

                db.run(insert, ["Rainbow Lowe",
                    10,
                    "Raspberry, Mango, Bubblegum",
                    "CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR. Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.",
                    "Three soft milky ice cream scoops topped with rainbow chocolate buttons ",
                    "img/rainbow.jpg",
                    false])

                db.run(insert, ["Caramel Cara",
                    10,
                    "Caramel, coconut",
                    "CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR. Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.",
                    "Two large scoops coconut and caramel ice cream in a bowl, topped with coconut flakes and frozen raspberry",
                    "img/caramell.jpg",
                    false])
            }
        })
    }
})

module.exports = db