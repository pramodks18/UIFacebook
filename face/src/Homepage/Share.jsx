import React from "react";
import { MdInsertPhoto } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { FaLocationPin } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import './share.css'
function Share(){
    var style1={color:"blue"};
     var style2={color:"red"};
      var style3={color:"green"};
       var style4={color:"yellow"};
    return(
        <>
      <div onVolumeChange="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="Images/kholi.jpg" className="shareprofileimg" alt="kholi" />
                <input  placeholder="Whats's on your mind" className="Shareinput" />
            </div>
            <hr  className="sharehr"/>
            <div className="sharebutton1">
                <div className="shareoption">
                    <div className="shareoption">
                        <MdInsertPhoto  style={style2} className="shareicon"/>
                        <span className="shareoptiontext">Photo/Video</span>
                    </div>

                    <div className="shareoption">
                        <IoPricetagOutline  style={style1} className="shareicon"/>
                        <span className="shareoptiontext">Tag</span>
                    </div>

                    <div className="shareoption">
                        <FaLocationPin  style={style3} className="shareicon"/>
                        <span className="shareoptiontext">Location</span>
                    </div>

                     <div className="shareoption">
                        <MdOutlineEmojiEmotions   style={style4} className="shareicon"/>
                        <span className="shareoptiontext">Feelings</span>
                    </div>
                    <button className="sharebutton">Share</button>

                </div>

            </div>

        </div>
      </div>
        </>
    )
}
export default Share;