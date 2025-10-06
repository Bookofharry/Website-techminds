
import Kids from "../compo/kids"
import KidsCodeOverview from "../compo/add"
import Picture from "../compo/PictureTemplate"
import KidsPicture from "../compo/KidsShowCase"
function KidsCoding(){



    return(
        <div>
         
          
            {/* <Progress /> */}
            <Kids />
            <KidsPicture />
            <KidsCodeOverview/>
            {/* <KidsShowcase /> */}
            <Picture />

        </div>
    )
}

export default KidsCoding