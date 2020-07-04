/* eslint-disable jsx-a11y/alt-text */
/** eslint-disable */
import React from 'react';
import './ReviewUser.style.css';
const ReviewUser = props => {
  return (
    <div>
      <div className="main">
      <div className='card'>
        <img src={props.image} />
        <div className='container'>
          <h1 className='name'>{props.name}</h1>
          <h2 className='email'>{props.email}</h2>
          <h2 className='rating'>{props.rating}</h2>
          <p className='para'>{props.review}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReviewUser;
