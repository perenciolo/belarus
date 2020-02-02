/**
 * Transforms backend article data into frontend readable one.
 *
 * @param data
 * @returns {{}}
 */
export const article = data => ({
  title: data.title,
  id: data.id
});

/**
 * Transforms backend recipe data into frontend readable one.
 *
 * @param data
 * @returns {{}}
 */
export const recipe = ({
  title,
  id,
  image,
  type,
  path,
  isPublished,
  isPromoted,
  cookingTime,
  difficulty,
  ingredients,
  instructions,
  summary
}) => ({
  title,
  id,
  image,
  type,
  path,
  isPublished,
  isPromoted,
  cookingTime,
  difficulty,
  ingredients,
  instructions,
  summary
});
