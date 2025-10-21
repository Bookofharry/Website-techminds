import ClassRoom from '../assets/chimobi.jpeg'
import Fortune from '../assets/fortune.jpeg'
import Rachael2 from '../assets/rachael1.jpeg'
import SpaceGuy from '../assets/classsection.jpeg'
import James from '../assets/class2.jpeg'
import Class from '../assets/instructor.jpeg'
/**
 * DaisyUI carousel that maps over an images array.
 * Pass your own list via the `images` prop, or it falls back to the demo list.
 */
function Picture({
  images = [
    { src: Rachael2, alt: "Photo 1" },
    { src: ClassRoom, alt: "Photo 2" },
    { src: James, alt: "Photo 3" },
    { src: Class, alt: "Photo 4" },
    // { src: Rachael2, alt: "Photo 5" },
    { src: SpaceGuy, alt: "Photo 6" },
    { src: Fortune, alt: "Photo 7" },
  ],
  itemClassName = "carousel-item", // customize if you need different sizing
}) {
  return (
    <div>
      <div className="carousel carousel-center rounded-box space-x-4 p-2">
        {images.map((img, i) => (
          <div key={img.src + i} className={itemClassName}>
            <img
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              loading="lazy"
              className="h-60 w-120 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Picture;

