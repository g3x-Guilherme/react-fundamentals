import React  from "react";
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader'
import styles from './Post.css';
export function Post({ post, onRemove }) {

  return (
    <article 
    className={ 
      post.removed 
       ? styles.postDeleted 
       : styles.post
     }
    >
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
    removed: PropTypes.bool.isRequired,
  }),
};