import ClassRoom from '../assets/classsection.jpeg'
import Fortune from '../assets/fortune.jpeg'
import Rachael from '../assets/rachael.jpeg'
/**
 * DaisyUI carousel that maps over an images array.
 * Pass your own list via the `images` prop, or it falls back to the demo list.
 */
function Picture({
  images = [
    { src: Rachael, alt: "Photo 1" },
    { src: ClassRoom, alt: "Photo 2" },
    { src: Fortune, alt: "Photo 3" },
    { src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp", alt: "Photo 4" },
    { src: Rachael, alt: "Photo 5" },
    { src: Fortune, alt: "Photo 6" },
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
              className="h-48 w-72 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Picture;

