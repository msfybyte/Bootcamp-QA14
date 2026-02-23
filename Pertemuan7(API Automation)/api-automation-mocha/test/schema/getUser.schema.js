module.exports = {
  type: "object",
  required: ["data"],
  properties: {
    data: {
      type: "object",
      required: ["id", "email", "first_name", "last_name"],
      properties: {
        id: { type: "number" },
        email: { type: "string" },
        first_name: { type: "string" },
        last_name: { type: "string" }
      }
    }
  }
};