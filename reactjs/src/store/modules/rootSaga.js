import { all } from "redux-saga/effects";

import recipes from "~/store/modules/recipes/sagas";

export default function* rootSaga() {
  return yield all([recipes]);
}
