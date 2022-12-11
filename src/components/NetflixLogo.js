import React from "react"
import "../styles/Animation.css";
import logo from "../assets/an.gif"


const NetflixLogo = () => {

    const logoDiss = () => {
        const logo = document.querySelector(".logo");
        logo.classList.add("logo2");
        //logo.style.height=0;
    }
    setTimeout(logoDiss, 4000)


    return (<div>
        <img src={logo} className="logo" alt="logo" />

    </div>)
}

export default NetflixLogo













