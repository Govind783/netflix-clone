import React from 'react'
import "../styles/Search.css"
import axios from 'axios'
import { useState, useEffect } from 'react'

const Search = () => {

    const [searchData, setSearchData] = useState([1,2]);
    const [searchTerm, setsearchTerm] = useState([]);

    const Search = (e) => {
        setsearchTerm(e.target.value)
    }

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`);
        setSearchData(data.Search[0])

    }



    useEffect(() => {

     fetchTrending();

    }, [searchTerm])




    return (
        <div className=' relative top-40'>
            <p className='font-bold text-2xl relative flex justify-center'>SEARCH FOR ANY MOVIE</p>

            <div className="inputbox flex text-center">
                <input required="required" type="text" className='inp-text' onChange={Search} />
                <span>SEARCH</span>
                <i></i>
            </div>

            <br />
            <br />

            <div className='search-container'>

             <p className='search-name'>   {searchData.Title} </p>
             <img src={searchData.Poster} className="pic-poster" /> 

            </div>

        </div>
    )
}

export default Search