import React from 'react';
import { COMMENT_POST, PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';

const PhotoCommentsForm = ({ id }) => {
  const [comment, setComment] = React.useState('');
  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    await request(url, options);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeHolder="Comente.."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <Enviar />
      </button>
    </form>
  );
};

export default PhotoCommentsForm;
