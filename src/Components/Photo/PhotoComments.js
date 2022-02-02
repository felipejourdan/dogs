import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoCommentes = (props) => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);

  return (
    <div>
      <ul className={styles.comment}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>
              {comment.comment_author}:<span>{comment.comment_content}</span>
            </b>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} />}
    </div>
  );
};

export default PhotoCommentes;
