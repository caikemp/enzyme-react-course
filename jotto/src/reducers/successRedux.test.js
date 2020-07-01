import { actionTypes } from "../actions";
import successRedux from "./successRedux";

describe("successRedux", () => {
  test("return default inital state of `false` when no action is passed", () => {
    const newState = successRedux();
    expect(newState).toBe(false);
  });

  test("return state of true upon receivind an action of type `CORRECT_GUESS`", () => {
    const newState = successRedux(undefined, {
      type: actionTypes.CORRECT_GUESS,
    });
    expect(newState).toBe(true);
  });
});
