import React from "react";
import './Signup.css';
import { useState } from "react";
import { Link } from "react-router-dom";
function Signup(){
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[cnfpassword,setcnfpassword]=useState("");
    const[birthday,setbirthday]=useState([]);
    const[gender,setgender]=useState("");
    const[passwordError,setpasswordError]=useState(false);
 const register=(e)=>{
        e.preventDefault();
        if(password!=cnfpassword){
            setpasswordError(true)
        }else{
            setpasswordError(false)
        }
        console.log("Firstname: "+firstname);
        console.log("Lastname: "+lastname);
         console.log("Email: "+email);
         console.log("Password: "+password);
         console.log("ConfirmPassword: "+cnfpassword);
         console.log("DOB: "+birthday);
          console.log("Gender: "+gender);
         
    }

    return(
        <>
     <div className="register">
        <div className="registercontainer">
            <h1>SignUp</h1>
            <p>It's quick and easy</p>
            <div className="hr3">
                <form action="" onSubmit={register}>
                    <div className="row">
                        <input onChange={(e)=>setfirstname(e.target.value)} type="text" className="registername" placeholder="FirstName" required />
                         </div>
                         <div className="row">
                        <input onChange={(e)=>setlastname(e.target.value)} type="text" className="registername" placeholder="LastName" required/>
                         </div>
                         <center className="center">
                            <input onChange={(e)=>setemail(e.target.value)}type="email" placeholder="Email" required />
                         </center>
                          <center className="center">
                            <input onChange={(e)=>setpassword(e.target.value)}type="password" placeholder="NewPassword" required maxLength={10} />
                             <input onChange={(e)=>setcnfpassword(e.target.value)} type="paswword" placeholder="ConfirmPassword" required maxLength={10} />
                         </center>
                         {passwordError && <p className="warning">Password does not match❌</p> }
                         <h5 className="registerdate">Date of Birth</h5>
                         <div className="row">
                            <select name="" id="" className="registerdate2" onChange={(e)=>setbirthday([...birthday,e.target.value])} >
                                <option value="Day">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                    </select>
                    <select name="" id="" className="registerdate3" onChange={(e)=>setbirthday([...birthday,e.target.value])}>
                        <option value="Day">Month</option>
                        <option value="Day">Jan</option>
                        <option value="Day">Feb</option>
                        <option value="Day">March</option>
                        <option value="Day">April</option>
                        <option value="Day">May</option>
                        <option value="Day">Jun</option>
                        <option value="Day">Jul</option>
                        <option value="Day">Sept</option>
                        <option value="Day">Oct</option>
                        <option value="Day">Nov</option>
                        <option value="Day">Dec</option>
                        
                </select>
                     <select name="" id="" className="registerdate4"onChange={(e)=>setbirthday([...birthday,e.target.value])}>
                        <option value="Day">Year</option>
                         <option value="Day">2021</option>
                          <option value="Day">2022</option>
                           <option value="Day">2023</option>
                            <option value="Day">2024</option>
                             <option value="Day">2025</option>
                              <option value="Day">2026</option>

                </select>
                         </div>
                         <h5 className="registergender">Gender</h5>
                         <div className="sizeing">
                            <div className="registerradiocontainer">
                            <div className="wrapper">
                                <label htmlFor="">Female</label>
                                <input onChange={(e)=>setgender(e.target.value)} type="radio" name="gender" value="Female"/>
                            </div>
                             <div className="wrapper">
                                <label htmlFor="">Male</label>
                                <input onChange={(e)=>setgender(e.target.value)} type="radio" name="gender" value="Male"/>
                            </div>
                             <div className="wrapper">
                                <label htmlFor="">Others</label>
                                <input onChange={(e)=>setgender(e.target.value)}type="radio" name="gender" value="Others"/>
                            </div>
                            </div>
                            <p className="registerpolicy"> By clicking Sign Up, You agree to our <span>terms,Data policy
                                </span> and<span>cookie policy</span>
                                you may recieve sms notificationfrom us and can OTP out any time</p>
                                <center>
                                    <button type="submit">SIgnUp</button>
                                </center>
                                <center>
                                    <Link to="/" href="#" className="registerlogin">Already have an account?</Link>
                                </center>
                         </div>
                </form>
            </div>
        </div>

     </div>
        </>
    )
}
export default Signup;