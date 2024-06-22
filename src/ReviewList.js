import React from 'react';
import reviews from './data';

function ReviewList({ reviews }) {
  return (
    <div className="review-container">
      {reviews.map((review) => (
        <div key={review.id} className="review-item">
            <div className="review-content">
                <div>
                    <img src={review.image} alt={review.name} className="reviewr-image"/>    
                </div>
                <div className="review-text">
                    <h3>{review.name}</h3>
                    <p>{review.comment}</p>

                </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;