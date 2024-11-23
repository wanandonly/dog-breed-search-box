export const filterPossibleValues = (
  possibleValues: string[],
  value: string
) => {
  return possibleValues?.filter((suggestion) =>
    suggestion.toLowerCase().includes(value.toLowerCase())
  );
};
