import React from 'react'
import "../styles/Home.css";
import SimpleSlider from './Carousel';
import Generes from './Generes';
import Latest from './Latest';
import Search2 from './Search2';
import Trending from "./Trending"

const Home = () => { 

  return (<>
    <div className='wrap homeDisappear' >

      <SimpleSlider className="carousel" />
      <Trending />
      <Latest />
      <Generes />
      <Search2 />

    </div>
  </>
  )
}

export default Home

//     
