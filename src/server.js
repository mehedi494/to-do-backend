/* eslint-disable no-undef */
/* eslint-disable no-console */

const mongoose = require('mongoose');
const  app= require( "./app");

require("dotenv").config()
const mongoURI = process.env.MONGODB_URI;
async function bootstrap() {
  try {
    console.log(typeof(mongoURI));
    await mongoose.connect(`${mongoURI}`);
    console.log(`🛢   Database is connected successfully`);

    app.listen(process.env.PORT || 5000 , () => {
  
      console.log(`Application  listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect database", err);
  }
}

bootstrap();

