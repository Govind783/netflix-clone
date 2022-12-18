import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "../styles/Latest.css";
import AliceCarousel from 'react-alice-carousel';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'



const Latest = () => {

  const [content, setContent] = useState([]);

  const [loading, setLoading] = useState(false);

  const renderNextButton = ({ isDisabled }) => {
    return <FaArrowRight style={{ position: "absolute", right: "45px", top: "105px", fontSize: "25px" }} />
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <FaArrowLeft style={{ position: "absolute", right: "1460px", top: "100px", fontSize: "25px" }} />
  };


  const fetchTrending = async () => {
    setLoading(true)

    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    setContent(data.results)
    setLoading(false);

  }

  useEffect(() => {
    fetchTrending();

  }, [])

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
    speed: 500
  };

  const imageSizeLink = "https://image.tmdb.org/t/p/w500"

  return (<>

    <p className="font-bold text-2xl mt-12 ml-16 fav">FAVOURITES</p>


    <div className='main-parent mt-6'>


      {loading === true ? <div className='loadingHold2'> <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />  <p className=' text-gray-400'> LOADING... </p> </div> : <>
        <AliceCarousel responsive={responsive} infinite={true}
          keyboardNavigation={true}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}>


          {content.map((item) => {
            return (
              <Link to={`/${item.id}`} key={item.id}>

                <div class="content">

                  <div className="content-overlay"></div>
                  <img className="content-image trending-pic" src={`${imageSizeLink}/${item.poster_path}`} />
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
              </Link>

            )
          })}
        </AliceCarousel>

      </>

      }



    </div>

  </>

  )
}

export default Latest