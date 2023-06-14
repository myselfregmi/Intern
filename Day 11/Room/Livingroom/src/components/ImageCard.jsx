import React from 'react';

const ImageCard = ({ imageUrl, text, heartIcon}) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={text} />
      <div className="image-overlay">
        <div className="text">{text}</div>
        <div className="heart-icon">{heartIcon}</div>

     </div>
    </div>
  );
};

export default ImageCard;
