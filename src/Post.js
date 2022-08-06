import React  from "react";
import PropTypes from 'prop-types';

export function Post({ likes, post }) {
  return (
  <>
  <article>
    <h3>{ post.title }</h3>
    <small>{ post.subtitle }</small>
    <br />
    <p> Media: { likes / 2 } </p>
  </article>
  </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  Post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
};