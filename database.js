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
            icecreamDescription TEXT,
            icecreamImg TEXT
            )`,(err) => {
            if (err) {
            }else{
                //Skapa glassarna
                let insert ='INSERT INTO icecream (icecreamName, icecreamPrice, icecreamFlavour, icecreamContent, icecreamDescription, icecreamImg) VALUES (?,?,?,?,?,?)'
                db.run(insert, ["Chonky Chocolate",10,"Chocolate","CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR.\n" +
                "Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.","Big scoop of chocolate ice cream","/img/chocolate.png"])
                db.run(insert, ["Plain Jane",10,"Vanilla","CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR.\n" +
                "Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.","Big scoop of vanilla ice cream","/img/vanilla.png"])
                db.run(insert, ["Caramell Kevin",12,"Vanilla, Caramell","CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR.\n" +
                "Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.","Big scoop of vanilla and caramell ice cream","/img/caramell.png"])
                db.run(insert, ["Caramell Kevin",12,"Vanilla, Caramell","CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR.\n" +
                "Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.","Big scoop of vanilla and caramell ice cream","/img/caramell.png"])
                db.run(insert, ["Caramell Kevin",12,"Vanilla, Caramell","CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR.\n" +
                "Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.","Big scoop of vanilla and caramell ice cream","/img/caramell.png"])
                db.run(insert, ["Caramell Kevin",12,"Vanilla, Caramell","CREAM, LIQUID SUGAR (SUGAR, WATER), SKIM MILK, WATER, SUGAR, WHEAT FLOUR, PEANUTS, COCOA (PROCESSED WITH ALKALI), BROWN SUGAR, EGG YOLKS, COCOA POWDER, PEANUT OIL, SOYBEAN OIL, BUTTER (CREAM, SALT), INVERT CANE SUGAR, SALT, CHOCOLATE LIQUOR, EGGS, TAPIOCA FLOUR, PEANUT FLOUR, PEANUT EXTRACT, VANILLA EXTRACT, EGG WHITES, GUAR GUM, COCOA BUTTER, NATURAL FLAVOR, CARRAGEENAN, SOY LECITHIN, BAKING SODA, MALTED BARLEY FLOUR.\n" +
                "Allergy Information: CONTAINS MILK, EGGS, WHEAT, PEANUTS AND SOY.","Big scoop of vanilla and caramell ice cream","/img/caramell.png"])
            }
        })
    }
})

module.exports = db