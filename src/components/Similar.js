import React from 'react'
import "../styles/Latest.css";
import AliceCarousel from 'react-alice-carousel';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



const Similar = (props) => {


  const similarMovieData = props.send;



  const imageSizeLink = "https://image.tmdb.org/t/p/w500"

  const renderNextButton = ({ isDisabled }) => {
    return <FaArrowRight style={{ position: "absolute", right: "45px", top: "105px", fontSize: "25px" }} />
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <FaArrowLeft style={{ position: "absolute", right: "1460px", top: "100px", fontSize: "25px" }} />
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
    speed: 500
  };



  return (

    <div className='main-parent mt-6 singleCaro'>
      <AliceCarousel responsive={responsive} infinite={true}
        keyboardNavigation={true}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        autoPlay={true}
        autoPlayInterval={1500}
      >


        {similarMovieData.map((item) => {
          return (

            <div class="content " key={item.id}>

              <div className="content-overlay"></div>
              <img className="content-image trending-pic singCaroPic" src={`${imageSizeLink}/${item.poster_path}`} alt="hey" />
              <div className="content-details fadeIn-bottom">

                <div className={item.title.length < 6 ? "nameLength" : ""}>
                  <h3 className="content-title trending-names ">{item.title}</h3>
                </div>

                <p class="content-text rating">IMDB:{item.vote_average} /10</p>
                {<br />}
                <p className='flex justify-center flex-wrap overview'>OVERVIEW : </p>
                <p className='descr'> {item.overview.slice(0, 120)} . . .</p>
              </div>

            </div>

          )
        })}
      </AliceCarousel>
    </div>

  )
}

export default Similar