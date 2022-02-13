import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoCommentes = (props) => {
  const { login } = React.useContext(UserContext);
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  console.log(comments);
  return (
    <>
      <ul
        className={`${styles.comments} ${props.single ? styles.single : ""} `}
        ref={commentsSection}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>
              {comment.comment_author}: <span>{comment.comment_content}</span>
            </b>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.ingle}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoCommentes;
