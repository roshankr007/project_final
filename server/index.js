const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));     


//to server the static files from the public directory
//routes:
app.use("/auth",authRoutes)
app.use("/products",listingRoutes)    //TODO-A CHANGE MADE HERE
app.use("/bookings",bookingRoutes);  //add booking routes to our application
app.use("/users",userRoutes)


/*MONGOOSE SETUP */
const PORT= 3001;
mongoose
        .connect(process.env.MONGO_URL,
        {
        dbName: "Decor_Rentals", 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() =>
        {
            app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
        })
        .catch((err) => console.log(`${err} did not connect`));       