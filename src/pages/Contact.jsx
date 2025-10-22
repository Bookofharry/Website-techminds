import Mike1 from '../assets/images/mike1.jpg';
import Mikemike from '../assets/images/mikemike.jpg';
import Mrmike from '../assets/images/mrmike.jpg';
import Tosin from '../assets/images/tosin.jpg';
import Wisdom from '../assets/images/wisdom.jpg';

export const DownImages = [

    { src: Mrmike, alt: "Andrew" },
    { src: Tosin, alt: "Fortune" },
    { src: Wisdom, alt: "Instructors" },
    // { src: Mike1, alt: "Jame" },
    { src: Mikemike, alt: "Jerryy" },

];




import ContactSection from "../compo/form"
import BusinessCtaSection from "../compo/cta"
import { AllImages } from "../compo/AllImage";
function In({itemClassName = "carousel-item"}) { 
  return (
    <div>
      <div className="carousel carousel-center rounded-box space-x-4 p-2">
        {DownImages.map((img, i) => (
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


function Contact(){
    return(
       <div> 
        <BusinessCtaSection />
        <ContactSection />
        <In />
       </div>
    )
}

export default Contact
