import { DownImages } from "./AllImage";
function Down({itemClassName = "carousel-item"}) { 
  return (
    <div>
      <div className="carousel carousel-center rounded-box space-x-4 p-2">
        {DownImages.map((img, i) => (
          <div key={img.src + i} className={itemClassName}>
            <img
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              loading="lazy"
              className="h-45 w-80 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Down;