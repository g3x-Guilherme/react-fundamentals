import React  from "react";
import PropTypes from 'prop-types';

export function Post({ likes, post, onRemove }) {
  return (
  <>
  <article>
    <strong>{ post.title }</strong>
    <button onClick={() => onRemove(post.id)}>Remover</button>
    <br />
    <small>{ post.subtitle }</small>
    <br />
    <p> Media: { likes / 2 } </p>
  </article>
  <br />
  </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  Post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
};