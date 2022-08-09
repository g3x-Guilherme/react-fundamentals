import React  from "react";
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader'

export function Post({ theme, post, onRemove }) {

  return (
  <>
    <article>
      <PostHeader 
      onRemove={onRemove}
      post={{
        id: post.id,
        title: post.title,
        read: post.read,
      }}
        />
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
  theme: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  Post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }),
};