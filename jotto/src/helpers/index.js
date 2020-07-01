/**
 *
 * @param {*} guessedWrod
 * @param {*} secretWord
 */
export function getLetterMatchCount(guessedWrod, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWrod.split(""));

  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
}
