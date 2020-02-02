import React from "react";

function Detail({ recipe }) {
  return <div>Hello PUTA</div>;
}

Detail.getInitialProps = ({ query, store: { getState } }) => {
  console.log(getState()["recipes"]);
  // const recipe = getState()["recipes"].filter(
  //   recipe => recipe.title === query.recipe
  // );
  // return recipe;
  // let initialProps = {
  //   recipes: [],
  //   statusCode: 200
  // };

  // try {
  //   // Load all recipes from the backend.
  //   initialProps = await recipeApi.getAll(query.recipe);
  // } catch (e) {
  //   // Pass status code as internal properly. It is being checked inside of
  //   // render() method of _app.js.
  //   initialProps.statusCode = 500;
  // }

  // return initialProps;
};

export default Detail;
