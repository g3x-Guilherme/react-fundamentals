import React  from "react";
import PropTypes from 'prop-types';
import { PostHeader } from './PostHeader'

import {Subtitle, Rate} from './styles';
export function Post({ post, onRemove }) {

  return (
    <article>
      <PostHeader 
      onRemove={onRemove}
      post={{
        id: post.id,
        title: post.title,
        read: post.read,
      }}
        />

      <Subtitle>{ post.subtitle }</Subtitle>
      <Rate> Media: { post.likes / 2 } </Rate>
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