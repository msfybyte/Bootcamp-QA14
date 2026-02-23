const fetch = require("node-fetch");
const chai = require("chai");
const expect = chai.expect;

describe("GET Single User", () => {
  it("Should return user data", async () => {
    const response = await fetch("https://dummyjson.com/users/1");
    const body = await response.json();

    expect(response.status).to.equal(200);
    expect(body).to.have.property("age");
    expect(body).to.have.property("firstName");
    expect(body).to.have.property("lastName");
  });
});
