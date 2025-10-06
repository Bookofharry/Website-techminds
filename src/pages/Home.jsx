import Thank from "../compo/thank"
import Testimonial from "../compo/testimonial"
import HeroSplit from "../compo/SkillCard"
import DownloadCta from "../compo/cta2"
import Learn from "../compo/Learn"
import Faq from "../compo/loading"
import Numbers from "../compo/stat"
import Picture from "../compo/PictureTemplate"
import PicCarousel from "../compo/progress"



function Home(){
    return(
       <div> 
        <HeroSplit />
        <Learn />
        <Picture />
        <DownloadCta />
       <Thank />
       <PicCarousel />
       <Testimonial />
       <Numbers />
       <Faq />
       </div>
    )
}

export default Home

 
