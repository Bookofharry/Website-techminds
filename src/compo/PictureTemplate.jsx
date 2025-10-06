
/**
 * DaisyUI carousel that maps over an images array.
 * Pass your own list via the `images` prop, or it falls back to the demo list.
 */
function Picture({
  images = [
    { src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp", alt: "Photo 1" },
    { src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp", alt: "Photo 2" },
    { src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp", alt: "Photo 3" },
    { src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp", alt: "Photo 4" },
    { src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp", alt: "Photo 5" },
    { src: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp", alt: "Photo 6" },
    { src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp", alt: "Photo 7" },
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

