// import BusinessCtaSection from "../compo/cta"
import Thank from "../compo/thank"
import Testimonial from "../compo/testimonial"
import HeroSplit from "../compo/SkillCard"
import DownloadCta from "../compo/cta2"
import Learn from "../compo/Learn"
import Faq from "../compo/loading"
function Home(){
    return(
       <div> 
        <HeroSplit />
        <Learn />
        <DownloadCta />
       <Thank />
       <Testimonial />
       <Faq />
       </div>
    )
}

export default Home

 
