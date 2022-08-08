import React  from "react";
import PropTypes from 'prop-types';

export function Post({ post, onRemove }) {

  return (
  <>
    <article>
    <strong>
      { post.read && <s>post.title</s>}
      { !post.read && post.title}
    </strong>
    <button onClick={() => onRemove(post.id)}>Remover</button>
    <br />
    <small>{ post.subtitle }</small>
    <br />
    <p> Media: { post.likes / 2 } </p>
  </article>
  <br/>
  </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  Post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    likes: PropTypes.bool.isRequired,
  }),
};