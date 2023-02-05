const express = require("express");
const router = express.Router();

const graphiql = require("./graphiql.route");
const graphql = require("./graphql.route");

router.use("/", graphiql);
router.use("/", graphql);

module.exports = router;
