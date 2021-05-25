const { it, describe, beforeAll, expect } = require("@jest/globals");
const fetch = require("node-fetch");
const Ajv = require("ajv");
const data = require("./index.json");

describe("Prettier config", () => {
  const ajv = new Ajv();
  let schema;

  beforeAll(async () => {
    const response = await fetch("http://json.schemastore.org/prettierrc");
    const result = await response.json();
    schema = result.definitions.optionsDefinition;
  });

  it("should pass scheme test", () => {
    expect(ajv.validate(schema, data)).toStrictEqual(true);
  });
});
