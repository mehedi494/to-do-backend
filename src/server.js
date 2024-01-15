/* eslint-disable no-console */

const mongoose= require("mongoose");
const  app= require( "./app");

const  config= require( "./config/index");
// const  { errorlogger } =require ( "./shared/logger");
// import { RedisClient } from "./shared/redis";

async function bootstrap() {
  try {
   
    await mongoose.connect(config.database_url);
    // logger.info(`🛢   Database is connected successfully`);
    console.log(`🛢   Database is connected successfully`);

    app.listen(config.port||5000 , () => {
      // logger.info(`Application  listening on port ${config.port}`);
      console.log(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to connect database", err);
  }
}

bootstrap();

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received');
//   if (server) {
//     server.close();
//   }
// });
