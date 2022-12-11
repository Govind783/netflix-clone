import React from 'react'
import "../styles/Header.css";
import one from "../assets/one.png"
import two from "../assets/two.svg"
import three from "../assets/three.svg"
import four from "../assets/four.svg"
import five from "../assets/five.svg"
import six from "../assets/six.svg"





function Header() {

    const headerVisible = () => {
        const headerVisible = document.querySelector(".na1");
        headerVisible.classList.add("na2");
        headerVisible.classList.remove("na1");
    
      }
      setTimeout(headerVisible, 4160)

   
    return (
        

        <nav className='na1'>
            <menu className="nav-menu">
                    <img src={two} className='home-icon w-7' alt=""/>
                    <span className='underlinee'>HOME</span>

                <a>
                    <img src={three} className='home-icon' />
                    <span className='underlinee'>SEARCH</span>
                </a>

                <a>
                    <img src={one} className='home-icon' />
                    <span className='underlinee'>WATCHLIST</span>
                </a>

                <a>
                    <img src={four} className='home-icon' />
                    <span className='underlinee'>ORIGNAL</span>
                </a>

                <a>
                    <img src={five} className='home-icon' />
                    <span className='underlinee'>MOVIES</span>
                </a>

                <a>
                    <img src={six} className='home-icon' />
                    <span className='underlinee'>SERIES</span>
                </a>

            </menu>
        </nav>
    )
}

export default Header;

