import React from "react";
import "./frontContent.css";
import developer from "../../assets/undraw_mobile_development_re_wwsn.svg";

const FrontContent = () => {
    return (
        <div>
            <div className="content">
                <div className="front-content">
                    <h1>
                        Hi, I'm <span>DINESH</span> <br />Software Developer</h1>
                    <span className="blur"></span>
                    <span className="blur"></span>    
                    <p className="text">I am a disigner & developer</p>
                    <p className="text">  I'm good listner, I have a make my lot of websites & also freelancer</p>
                    <button className="let-btn">Let's go</button>
                </div>
                <div className="front-img">
                    <img src={developer} alt="" />
                </div>
            </div>

        </div>
    );
};

export default FrontContent;
