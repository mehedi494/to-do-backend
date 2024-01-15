
const cors = require("cors");
const express= require ("express");
const httpStatus= require( "http-status");
const { Routes } = require("./app/module/routes");
// import routes from "./app/routes";

const app = express();
app.use(cors());


//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use("/api/v1",Routes );

// Testing
app.get('/', async (req, res) => {

  res.send("hello");
  // throw new Error('Testing Error logger')
})

//global error handler
// app.use(globalErrorHandler);

//handle not found
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    /* errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ], */
  });
  next();
});

module.exports = app;
