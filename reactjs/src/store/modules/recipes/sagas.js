import { all, takeLatest, call, put } from "redux-saga/effects";

import * as recipeApi from "~/api/recipe";
import {
  getRecipesFailure,
  getRecipesSuccess
} from "~/store/modules/recipes/actions";
import * as types from "./actionTypes";

/**
 * React on example action being triggered.
 */
function* getRecipe() {
  try {
    // Load all recipes from the backend.
    const response = yield call(recipeApi.getAll);

    if (!response || response.statusCode !== 200 || !response.recipes.length) {
      throw new Error("Not found");
    }

    yield put(getRecipesSuccess(response.recipes));
  } catch (e) {
    yield put(getRecipesFailure());
  }
}

/**
 * Main entry point for all recipe sagas.
 */
export default all([takeLatest(types.GET_REQUEST, getRecipe)]);
