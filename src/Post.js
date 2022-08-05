import React  from "react";
import PropTypes from 'prop-types';

export function Post({post, likes}) {
  return (
  <>
  <article>
    <h3>{post.title}</h3>
    <small>{post.title}</small>
    <br />
   Media: {likes / 2}
  </article>
  </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  Post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};