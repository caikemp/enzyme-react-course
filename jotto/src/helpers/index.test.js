import { getLetterMatchCount } from ".";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("returns correct count when there are no matching letters", () => {
    const letterMachtCount = getLetterMatchCount("bones", secretWord);
    expect(letterMachtCount).toBe(0);
  });
  test("returns correct count when there are 3 matching letters", () => {
    const letterMachtCount = getLetterMatchCount("train", secretWord);
    expect(letterMachtCount).toBe(3);
  });
  test("returns correct count when there are duplicate letter in the guess", () => {
    const letterMachtCount = getLetterMatchCount("parka", secretWord);
    expect(letterMachtCount).toBe(3);
  });
});
