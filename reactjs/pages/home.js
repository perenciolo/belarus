import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as articleApi from "~/api/article";

const Title = styled.h1`
  color: magenta;
  font-size: 40px;
`;

function HomePage({ articles }) {
  return (
    <div>
      <Title>Home page is working!</Title>
      <br />
      <br />
      List of articles from Drupal:
      <br />
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            {article.title} (id: {article.id})
          </li>
        ))}
      </ul>
    </div>
  );
}

HomePage.getInitialProps = async () => {
  let initialProps = {
    articles: [],
    statusCode: 200
  };

  try {
    // Load all articles from the backend.
    initialProps = await articleApi.getAll();
  } catch (e) {
    // Pass status code as internal properly. It is being checked inside of
    // render() method of _app.js.
    initialProps.statusCode = 500;
  }

  return initialProps;
};

HomePage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string
    })
  )
};

HomePage.defaultProps = {
  articles: []
};

export default HomePage;
