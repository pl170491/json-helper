import { jsonHelper } from "../lib/index";

test("['hello'] of { hello: 'there' } should be ['there']", () => {
  expect(jsonHelper({ hello: "there" }, ["hello"])).toEqual(["there"]);
});

test("nested class", () => {
  expect(
    jsonHelper({ hello: { there: "Obi-Wan Kenobi" } }, ["hello", "there"]),
  ).toEqual(["Obi-Wan Kenobi"]);
});

test("top level array", () => {
  expect(
    jsonHelper(
      { hello: [{ there: "Obi-Wan Kenobi" }, { there: "General Grievous" }] },
      ["hello", "there"],
    ),
  ).toEqual(["Obi-Wan Kenobi", "General Grievous"]);
});
