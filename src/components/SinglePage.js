import React from 'react'
import "../styles/SinglePage.css";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Similar from './Similar';
import { useEffect, useState } from 'react';
import { ExternalLink } from 'react-external-link';
import { FaYoutube } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { watchLaterActions } from '../store/StateStore';
import { useDisclosure } from '@chakra-ui/react';
import Loader from './Loader';
import ReactLoading from 'react-loading';




import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'



const SinglePage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();


    const listOfWatchLaterMovies = useSelector((state) => state.watchLater.items);

    const removeFromList = () => {
        dispatch(watchLaterActions.removeFromWatchLater(id))
    };





    const [name, setName] = useState("");
    const [overview, setOverview] = useState("");
    const [date, setDate] = useState("");
    const [stars, setStars] = useState("");
    const [tagline, setTagLine] = useState("");
    const [poster, setPoster] = useState("");
    const [bgImage, setBgImage] = useState("");
    const [gen1, setGen1] = useState("");
    const [gen2, setGen2] = useState("");
    const [gen3, setGen3] = useState("");
    const [runTime, setRunTime] = useState("");
    const [sendData, setSendData] = useState([]);
    const [yt, setYt] = useState("");


    const params = useParams();
    const { id } = params;


    const addToWatchLater = (e) => {
        dispatch(
            watchLaterActions.addToWatchLater({
                id,
                name,
                poster,
                stars
            })
        );
    };




    const fetch = async () => {

        setLoading(true)

        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        const data2 = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);  // for similar

        const data3 = await axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`);  // for videos
        setLoading(false)

        setYt(data3.data.results[0].key);
        setSendData(data2.data.results);
        setName(data.title)
        setDate(data.release_date)
        setOverview(data.overview);
        setPoster(data.poster_path);
        setStars(data.vote_average);
        setTagLine(data.tagline)
        setBgImage(data.backdrop_path);
        setGen1(data.genres[0].name);
        setGen2(data.genres[1].name);
        setRunTime(data.runtime)
        console.log(data)
    }


    var num = runTime;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    var finalTime = +rhours + " hours and " + rminutes + " minutes";




    useEffect(() => {

        fetch();

    }, [])

    const imageSizeLink = "https://image.tmdb.org/t/p/w500";
    const imageSizeLink2 = "https://image.tmdb.org/t/p/w200";


    const ytLink = "https://www.youtube.com/watch?v=${yt}";

    const type="spin";


    return (
        <div className='singlePageParent'>


            {loading ? <ReactLoading className='loader2' type={type} /> : <>   <p className='singleName absolute top-24 text-3xl uppercase font-medium'>{name} </p>

                <div className='nameRevHolder italic'>
                    <p> IMDB: {Math.round(stars)}/ 10 </p>
                    <p className='time'>{finalTime}</p>
                    <p> U/A 16+ </p>
                </div>

                <div className=''>
                    <p className='tagline absolute top-64 left-80 mr-4'>  {tagline} </p>
                </div>

                <div className=' flex gap-6 absolute capitalize genreHold'>
                    <p className=' bg-gray-700 w-24 h-8 rounded-2xl text-center t'> {gen1} </p>.
                    <p className='bg-gray-700 w-40 h-8 rounded-2xl text-center relative t'> {gen2} </p>.
                    <p className='bg-gray-700 w-40 h-8 rounded-2xl text-center relative t'> ACTION </p>
                </div>


                <div className='releaseDesHold'>
                    <p> {overview} </p>
                </div>


                <div className='postHold'>
                    <img src={`${imageSizeLink}/${poster}`} className="post rounded-xl" />
                </div>


                <ExternalLink href={`https://www.youtube.com/watch?v=${yt}`} className='ytButton w-64 h-14 bg-gray-600 flex rounded-2xl gap-6 whitespace-nowrap text-xl hover:bg-gray-700'> <FaYoutube className='text-3xl ytBtn' />  SEE ON YOUTUBE </ExternalLink>



                <h1 className='seeMore text-3xl'>SEE MORE LIKE THIS</h1>
                <div>
                    <Similar send={sendData} />
                </div>


                <>
                    <div className='flex gap-8 bg-gray-600 justify-center rounded-2xl h-14 watchLaterHold hover:bg-gray-700' onClick={onOpen}>
                        <button className='uppercase text-2xl con' onClick={addToWatchLater}> ADD to watch later </button>
                        <BsBoxArrowUpRight className='text-3xl con2' />
                    </div>
                    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>WATCH LATER</DrawerHeader>
                            <DrawerBody>
                                <div>
                                    {listOfWatchLaterMovies.length === 0 ? <p className=' mt-5'> YOUR LIST IN EMPTY </p> : ""}
                                    {listOfWatchLaterMovies.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                <div>
                                                    <img src={`${imageSizeLink2}/${item.picture}`} className="watchLaterImg" />
                                                    <p className='watchLaterName'> {item.title} </p>
                                                    <p className='watchLaterImdb'> IMDB : {Math.round(item.rating)}/ 10 </p>
                                                </div>
                                                <button onClick={removeFromList} className="watchLaterRemoveBtn w-32 flex gap-8 bg-gray-600 justify-center rounded-2xl h-10 hover:bg-gray-700">REMOVE</button>
                                            </div>
                                        )
                                    })}

                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>

                </>

            </>
            }
        </div>
    )
}

export default SinglePage;



