import React from 'react';
import TokenPost from './endpoints/TokenPost';
import UserPost from './endpoints/UserPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

export const Api = () => {
  return (
    <div>
      <h2>UserPost</h2>
      <UserPost />
      <h2>TokenPost</h2>
      <TokenPost />
      <h2>PhotoPost</h2>
      <PhotoPost />
      <h2>PhotoGet</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;