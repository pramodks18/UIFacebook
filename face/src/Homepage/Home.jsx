import React from "react";
import Topbar from "./Topbar";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Centerbar from "./Centerbar";
import './Home.css'
function Home(){
    return(
        <>
        <div>
<Topbar/>
        </div>
     <div className="homecontiner">
<Leftbar/>
     
     <Centerbar/>
     <Rightbar/>
     </div>
     
        </>
    )
}
export default Home;