import BusinessCtaSection from "../compo/cta"
import Thank from "../compo/thank"
import Testimonial from "../compo/testimonial"
import HeroSplit from "../compo/SkillCard"
import DownloadCta from "../compo/cta2"
import Learn from "../compo/Learn"
function Home(){
    return(
       <div> 
        <HeroSplit />
        <Learn />
        <BusinessCtaSection />
       <Thank />
       <Testimonial />
        <DownloadCta />

       </div>
    )
}

export default Home

 
