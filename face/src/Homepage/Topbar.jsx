import { CiSearch } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { BsChatRightTextFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import './Topbar.css';

function Topbar() {
  return (
    <div className="topbarcontainer">
      
      <div className="topbarleft">
        <span className="logo">Facebook</span>
      </div>

     
      <div className="topbarcenter">
        <div className="searchbar">
          <CiSearch className="searchbaricon" />
          <input
            type="text"
            className="searchinput"
            placeholder="Search for Friends or Host"
          />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>

        <div className="topbaricons">
          <div className="topbariconitem">
            <IoPersonAddOutline />
            <span className="topbariconbadge">6</span>
          </div>
          <div className="topbariconitem">
            <BsChatRightTextFill />
            <span className="topbariconbadge">28</span>
          </div>
          <div className="topbariconitem">
            <FaBell />
            <span className="topbariconbadge">58</span>
          </div>
        </div>

        <div className="topbarprofile">
          <img
            src="Images/kohli.jpg"
            className="topbarimg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
