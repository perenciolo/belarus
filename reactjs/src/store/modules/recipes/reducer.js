import produce from "immer";

import * as types from "./actionTypes";

const INITIAL_STATE = {
  recipes: []
};

export default (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_SUCCESS: {
        draft.recipes = action.recipes;
        break;
      }

      case types.GET_FAILURE: {
        console.log("ta falhando ");
        break;
      }

      default: {
        break;
      }
    }
  });
