import React from 'react';
import ImageCard from './ImageCard';

const ImageContainer = () => {
  return (
    <div className="image-container">
      <div className="column">
        <ImageCard
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/edc080122ishka-designs-005-1672254029.jpeg?crop=1xw:1xh;center,top&resize=980:*"
          text="White Abstract Living Room"
          heartIcon="❤"
        />
        <ImageCard
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/edc-atraform-studios-04-15-20220327-v2qc-1665005918.jpg?crop=1xw:1xh;center,top&resize=980:*"
          text="Indoor Green Living Room"
          heartIcon="️❤"
        />
      </div>
      <div className="row">
        <ImageCard
          imageUrl="https://wpmedia.roomsketcher.com/content/uploads/2021/12/07192611/Decorating-Ideas-Living-Room-Design-Leaf-Print-Wallpaper-Home-Decor.jpg"
          text="Modern Living Room Design"
    
          heartIcon="❤️"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
