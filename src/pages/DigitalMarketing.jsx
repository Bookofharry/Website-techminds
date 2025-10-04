import Progress from "../compo/progress"
import { useState } from "react"
function Digital(){

    function remove(){
        setTimeout(() => {
            setStatus(() => true)
        },2000)
    }
    const [status,setStatus] = useState(false)
    remove()
    return(
        <div>
            {(!status) ? <Progress /> : <span></span>}

        </div>
    )
}

export default Digital