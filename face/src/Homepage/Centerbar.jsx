import React from "react";
import Share from "./share";
import Post from "./Post";
import './Centerbar.css'
function Centerbar(){
    return(
        <>
        <div className="centerbar">
        <div className="centerbarwrapper">
<Share/>
<Post/>
<Post/>

        </div>
       </div>
        </>
    )
}
export default Centerbar;