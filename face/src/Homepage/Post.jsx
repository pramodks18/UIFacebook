import React from "react";
import './Post.css';
import { TbDotsVertical } from "react-icons/tb";

function Post() {
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img src="Images/kohli.jpg" className="postprofileimg" alt="kohli" />
            <div className="postuserdetails">
              <span className="postusername">Virat Kohli</span>
              <span className="postDate">10 mins ago</span>
            </div>
          </div>
          <div className="posttopright">
            <TbDotsVertical />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">The only thing we have is the moment.</span>
          <img src="Images/kholi.jpg" alt="post" className="posting" />
        </div>
        <div className="postbottom">
          <div className="postbuttonleft">
            <img
              src="https://img.freepik.com/free-vector/like-button-thumbs-up-cartoon-style_78370-1159.jpg"
              
              alt="like"
              className="likeicon"
            />
            <span className="postlikecounter">567 people like it.</span>
            <img
              src="https://icons.iconarchive.com/icons/designbolts/free-valentine-heart/256/Heart-icon.png"
              alt="heart"
              className="hearticon"
            />
            
            <span className="postcommentcounter">455 comments.</span>
          
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default Post;
