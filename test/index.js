const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");

chai.use(chaiHttp);

describe("API ENDPOINT TESTING", () => {
  it("GET graphiql", (done) => {
    chai
      .request(app)
      .get("/graphiql")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("movies");
        expect(res.body.movies).to.have.all.keys(
          "title",
          "id",
          "duration",
          "watched",
          "actors",
        );
        expect(res.body).to.have.property("actors");
        expect(res.body.actors).to.have.an("array");
        done();
      });
  });
});
