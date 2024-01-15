/* eslint-disable no-undef */
/* eslint-disable no-console */

const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

async function bootstrap() {
  try {
    console.log(typeof mongoURI); // Logging the type of URI is not necessary

    await mongoose.connect(mongoURI, {
     
     
       // Add this line to prevent deprecation warning
    });

    console.log('🛢   Database is connected successfully');

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Application listening on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to the database', err);
  }
}

bootstrap();
