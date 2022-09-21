const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();


const userRoutes = require("./routes/userRoutes");





app.set("view engine", "views");
app.set("views","views");


app.use(bodyParser.urlencoded({extended:true}));



app.use("/uploads",express.static("uploads"));
app.use(userRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
    // console.log(process.env.MONGO_URL)
    app.listen(3000)
    console.log("database connected");
}).catch((err) => {
    console.log(err)
})