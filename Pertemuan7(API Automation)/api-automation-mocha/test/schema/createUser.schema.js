module.exports = {
  type: "object",
  required: ["name", "job", "age", "createdAt"],
  properties: {
    name: { type: "string" },
    job: { type: "string" },
    age: { type: "string" },
    createdAt: { type: "string" }
  }
};