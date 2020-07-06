import moxios from "moxios";
import { getSecretWord } from ".";
import { storeFactory } from "../../test/testUtils";

describe("getSecreteWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("adds response word to sate", () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
