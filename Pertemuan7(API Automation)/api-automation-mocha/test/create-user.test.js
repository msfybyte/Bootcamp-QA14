const fetch = require("node-fetch");
const chai = require("chai");
const expect = chai.expect;

describe("POST Create User", () => {
  it("Should create user successfully", async () => {
    const response = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: "Muhammad",
        lastName: "Sofyan",
        age: 30
      })
    });

    const body = await response.json();

    expect([200, 201]).to.include(response.status);
    expect(body).to.have.property("id");
    expect(body).to.have.property("firstName");
  });
});
