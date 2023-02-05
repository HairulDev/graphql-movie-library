let createError = require("http-errors");
let express = require("express");
const router = express.Router();
let app = express();

const routes = require("./routes");


const { verifyApiKey } = require("#middlewares/auth");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
router.use(verifyApiKey);
router.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
