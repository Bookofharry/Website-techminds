import Class from '../assets/class2.jpeg'
import Mike from '../assets/mike.jpeg'
import Lady from '../assets/lady.jpeg'
import Fortunne from '../assets/fortunne.jpeg'
import Fortune1 from '../assets/fortune1.jpeg'
import SpaceGuy from '../assets/spaceguy.jpeg'
import Andrew from '../assets/images/andrew.jpg'

function PicCarousel() {
  return (
    <div>
      <div className="carousel carousel-center rounded-box space-x-4 p-2">
        <div className="carousel-item">
          <img
            src={Lady}
            alt="Tech Minds photo"
            loading="lazy"
            className="h-68 w-130 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Andrew}
            alt="Tech Minds photo"
            loading="lazy"
            className="h-68 w-130 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={SpaceGuy}
            alt="Tech Minds photo"
            loading="lazy"
           className="h-68 w-130 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Mike}
            alt="Tech Minds photo"
            loading="lazy"
            className="h-68 w-130 object-cover rounded-lg"
          />
        </div>
        {/* <div className="carousel-item">
          <img
            src={Class}
            alt="Tech Minds photo"
            loading="lazy"
            className="h-48 w-72 md:h-56 md:w-80 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={SpaceGuy}
            alt="Tech Minds photo"
            loading="lazy"
            className="h-48 w-72 md:h-56 md:w-80 object-cover rounded-lg"
          />
        </div> */}
        <div className="carousel-item">
          <img
            src={Fortune1}
            alt="Tech Minds photo"
            loading="lazy"
            className="h-68 w-130 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default PicCarousel;
