import React from "react";

import PropTypes from "prop-types";
import Link from "next/link";
import getConfig from "next/config";

import { getRecipesRequest } from "~/store/modules/recipes/actions";

import RenderHTML from "~/components/01_atoms/RenderHTML";

const {
  publicRuntimeConfig: { BACKEND_URL }
} = getConfig();

function RecipePage({ recipes }) {
  return (
    <div>
      <h2>List of recipes from Drupal:</h2>
      <div>
        {recipes.map(recipe => (
          <div key={`${recipe.id}`}>
            <img
              src={BACKEND_URL + recipe.image.thumbnail.uri.url}
              alt={recipe.image.thumbnail.attributes.filename}
            />
            <div>
              <strong>{recipe.title}</strong>
            </div>
            <RenderHTML html={recipe.summary.processed} />
            <div>
              <Link href={recipe.path}>
                <a className="nav-link">Read more...</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

RecipePage.getInitialProps = ({ store }) => {
  let initialProps = {
    recipes: [],
    statusCode: 200
  };

  if (!store.getState().recipes.recipes.length) {
    store.dispatch(getRecipesRequest());
  }

  initialProps.recipes = store.getState().recipes.recipes;

  return initialProps;
};

RecipePage.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string
    })
  )
};

RecipePage.defaultProps = {
  recipes: []
};

export default RecipePage;
