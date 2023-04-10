const mongoose = require('mongoose');
require('dotenv').config()

// Setup / connect to db
mongoose.connect(process.env.DATABASE_URL,
   { useNewUrlParser: true,
    useUnifiedTopology: true });

const db = mongoose.connection
// events
db.on("open", () => {console.log(("mooose connected"))});
db.on("close", () => {});
db.on("error", (error) => {console.log("ERROR:", error)});

// export mongoose
module.exports = { mongoose }
