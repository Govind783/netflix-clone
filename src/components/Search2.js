import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FiCornerDownLeft } from "react-icons/fi"
import { Link } from 'react-router-dom';
import "../styles/Search2.css";
import "../styles/Search.css";
import Loader from './Loader';
import { useSelector } from 'react-redux';


const Search2 = () => {
    const [one, setOne] = useState([]);
    const [contentDisplay, setContentDisplay] = useState([]);
    const [loading, setLoading] = useState(false);


    const SearchMovie = (e) => {
        setOne(e.target.value);
    }


    const fetchTrending = async () => {
        setLoading(true)
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=f9b315322a2adab791aa6f2bbb138d02&language=en-US&page=1&query=${one}`);
        setContentDisplay(data.results);
        setLoading(false);

    }


    useEffect(() => {
        fetchTrending();
    }, [one])


    const imageSizeLink = "https://image.tmdb.org/t/p/w300"

    return (<div>


        <div className='mt-36'>
            <div className="inputbox flex text-center">
                <input required="required" type="text" className='inp-text' onChange={SearchMovie} />
                <span>SEARCH</span>
                <i></i>
            </div>
        </div>

        <p className='relative left-64 sear-txt font-bold text-2xl'>SEARCH FOR ANY MOVIE</p>
        <FiCornerDownLeft className="relative left-40 w-16 text-6xl fin" />

        <br />
        <br />

        <div className='search-parent'>

            {contentDisplay.map((item) => {
                return (
                    
                    <Link to={`/${item.id}`} key={item.id}>
                        <div className={item.poster_path === undefined ? "dead-link" : "action-indivitual"} key={item.id}>
                            <img src={`${imageSizeLink}/${item.poster_path}`} className={item.poster_path === null ? "dead-link gapp" : "search-img"} alt="hey" />
                            <br />
                            <br />
                        </div>
                    </Link>
                )
            })}
        </div>


    </div >
    )
}

export default Search2













/*

 
 */

