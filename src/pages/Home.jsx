import Thank from "../compo/thank"
import Testimonial from "../compo/testimonial"
import HeroSplit from "../compo/SkillCard"
import DownloadCta from "../compo/cta2"
import Learn from "../compo/Learn"
import Faq from "../compo/loading"
import Numbers from "../compo/stat"
import Picture from "../compo/PictureTemplate"
import PicCarousel from "../compo/progress"
import FooterPic from "../compo/Footerpic"
import Image from "../compo/CarouseImage"


function Home(){
    return(
       <div> 
        <HeroSplit />
        <Learn />
        <Image />
        <DownloadCta />
       <Thank />
        <Picture />
       <Testimonial />
       <PicCarousel />
       <Numbers />
       <Faq />
       <FooterPic/>
       </div>
    )
}

export default Home

 
