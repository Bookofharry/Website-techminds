
import Host from '../assets/hosts.jpeg'
import Md from '../assets/md.jpeg'
import Speakers from '../assets/speakers.jpeg'
import TalkFortune from '../assets/talkfortune.jpeg'
import Conduct from '../assets/conduct.jpeg'
import Everyone from '../assets/everyone.jpeg'

function FooterPic() {
  return (
    <div>
      <div className="carousel carousel-center rounded-box space-x-4 p-2">
        <div className="carousel-item">
          <img
            src={TalkFortune}
            alt="Pizza"
            loading="lazy"
            className="h-100 w-130 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Everyone}
            alt="Pizza"
            loading="lazy"
            className="h-100 w-130 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Md}
            alt="Pizza"
            loading="lazy"
            className="h-100 w-130 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Speakers}
            alt="Pizza"
            loading="lazy"
            // className="h-48 w-72 object-cover rounded-lg"
            className="h-100 w-130 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Host}
            alt="Pizza"
            loading="lazy"
            className="h-100 w-130 object-cover rounded-lg"
          />
        </div>
        <div className="carousel-item">
          <img
           src={Conduct}
            alt="Pizza"
            loading="lazy"
            className="h-100 w-130 object-cover rounded-lg"
          />
        </div>


      </div>
    </div>
  );
}

export default FooterPic;
