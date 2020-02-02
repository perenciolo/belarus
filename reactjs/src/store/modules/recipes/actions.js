import * as types from "./actionTypes";

/**
 * Evoke saga to request recipes.
 */
export const getRecipesRequest = () => ({
  type: types.GET_REQUEST
});

/**
 * Save recipes on store.
 */
export const getRecipesSuccess = recipes => ({
  type: types.GET_SUCCESS,
  recipes
});

/**
 * Raise get recipes failure.
 */
export const getRecipesFailure = () => ({
  type: types.GET_FAILURE
});
