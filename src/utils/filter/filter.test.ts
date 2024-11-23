import { filterPossibleValues } from "./filter";

describe("filterPossibleValues", () => {
  test("Returns possible suggested values in array if the entered input value matches against the passed down possible values array", () => {
    const possibleValues = ["dane", "hound", "beagle"];

    const res = filterPossibleValues(possibleValues, "da");

    expect(res).toEqual(["dane"]);
  });

  test("Doesn't return possible suggested values in array if the entered input value does not match against the passed down possible values array", () => {
    const possibleValues = ["dane", "hound", "beagle"];

    const res = filterPossibleValues(possibleValues, "ee");

    expect(res).toEqual([]);
  });
});
