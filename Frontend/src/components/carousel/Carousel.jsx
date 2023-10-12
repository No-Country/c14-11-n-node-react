import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="https://image.tmdb.org/t/p/w500/cHNqobjzfLj88lpIYqkZpecwQEC.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://image.tmdb.org/t/p/w500/cHNqobjzfLj88lpIYqkZpecwQEC.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="https://image.tmdb.org/t/p/w500/cHNqobjzfLj88lpIYqkZpecwQEC.jpg" alt="Slide 3" />
      </div>
    </Carousel>
  );
}

export default MyCarousel;