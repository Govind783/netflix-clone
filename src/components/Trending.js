import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import "../styles/Trending.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'


const Trending = () => {

  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrending = async () => {
    setLoading(true)

    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`);

    setContent(data.results)

    setLoading(false)

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

  const renderNextButton = ({ isDisabled }) => {
    return <FaArrowRight style={{ position: "absolute", right: "45px", top: "105px", fontSize: "25px" }} />
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <FaArrowLeft style={{ position: "absolute", right: "1460px", top: "100px", fontSize: "25px" }} />
  };

  const imageSizeLink = "https://image.tmdb.org/t/p/w500"



  return (


    <div className='mobTrending'>
      <p className='trending font-bold text-2xl mt-8 ml-8'>TRENDING </p>
      <>
        <br />
        {loading === true ? <div className='loadingHold'> <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />  <p className=' text-gray-400'> LOADING... </p> </div> : <>

          <div className='main-parent'>
            <AliceCarousel responsive={responsive} infinite={true}
              keyboardNavigation={true}
              renderPrevButton={renderPrevButton}
              renderNextButton={renderNextButton}

            >
              {content.map((item) => {

                return (
                  <Link to={`/${item.id}`} key={item.id} >
                    <div>
                      <div className="content" key={item.id}>

                        <div className="content-overlay"></div>
                        <img className="content-image trending-pic" src={`${imageSizeLink}/${item.poster_path}`} alt="hey" />
                        <div className="content-details fadeIn-bottom">
                          <h3 className="content-title trending-names">{item.title === undefined ? <p> name unavailable </p> : <p> {item.title}  </p>}</h3>
                          <p className="content-text rating">IMDB:{item.vote_average} /10</p>
                        </div>
                      </div>
                    </div>

                  </Link>
                )

              })}
            </AliceCarousel>
          </div>

        </>}



      </>

    </div >

  )
}

export default Trending



/*












ORIGINAL



                <div className='indivaitual-movie' key={item.id}>

                  <img src={`${imageSizeLink}/${item.poster_path}`} width="600px" height="100px" alt="alt" className='trending-pic' />
                  <p className='trending-names'> {item.title}</p>

                </div>














*/
