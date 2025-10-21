// import ClassRoom from '../assets/chimobi.jpeg'
// import Fortune from '../assets/fortune.jpeg'
// import Rachael2 from '../assets/rachael1.jpeg'
// import SpaceGuy from '../assets/classsection.jpeg'
// import James from '../assets/class2.jpeg'
// import Class from '../assets/instructor.jpeg'
/**
 * DaisyUI carousel that maps over an images array.
 * Pass your own list via the `images` prop, or it falls back to the demo list.
 */
import { AllImages } from "./AllImage";
function Image({itemClassName = "carousel-item"}) { 
  return (
    <div>
      <div className="carousel carousel-center rounded-box space-x-4 p-2">
        {AllImages.map((img, i) => (
          <div key={img.src + i} className={itemClassName}>
            <img
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              loading="lazy"
              className="h-68 w-130 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Image;

