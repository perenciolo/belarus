import * as transforms from "~/utils/transforms";
import request from "~/utils/request";

/**
 * Returns articles list from backend.
 *
 * @returns {Promise<any>}
 */
export const getAll = (uuid = "") =>
  new Promise((resolve, reject) => {
    request
      .get(`/api/recipes${uuid ? `/${uuid}` : ""}`)
      .query({
        include: "image.thumbnail,image.imageFile"
      })
      // Tell superagent to consider any valid Drupal response as successful.
      // Later we can capture error codes if needed.
      .ok(resp => resp.statusCode)
      .then(response => {
        resolve({
          // eslint-disable-next-line max-len
          recipes:
            response.statusCode === 200
              ? response.body.data.map(recipe => transforms.recipe(recipe))
              : [],
          statusCode: response.statusCode
        });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error("Could not fetch the recipes.", error);
        reject(error);
      });
  });
