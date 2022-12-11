import React from 'react'
import "../styles/Login.css"
import Home from './Home'
import { Link } from 'react-router-dom'

const Login = () => {



  AOS.init({disable: 'mobile'});

  return (<div>


    <section class="showcase">
      <div class="menu">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
      </div>
      <div class="container1">


        <div class="story-card-text">
          <h1 className="capitalize font-semi-bold">Unlimited movies, TV shows, and more.</h1>
          <h2  className="capitalize">Watch anywhere. Cancel anytime.</h2>
          <p  className="capitalize">Ready to watch? Enter your email to create or restart your membership.</p>

            <Link to="/home"> 
          <div class="e_box">
            <button className='bg-red-700 font-semibold sm:btn-wide'>ENTER THE NETFLIX WORLD</button>
          </div>
        </Link>
        </div>



      </div>

    </section>


    <div class=" container">
      <div class="box">
        <div class="tv_text" data-aos="slide-right"  data-aos-duration="800">
          <h1>Enjoy on your TV.</h1>
          <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>

        <div class="i_box">
          <img class="img" src="images/p5.png" alt="" />
          <video class="video-1" autoplay="" playsinline="" muted="" loop="">
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
          </video>
        </div>

      </div>
    </div>

    <section class="container">
      <div class="box" >
        <div class="download_box">
          <div class="download_image"   data-aos="fade-left"  data-aos-duration="800">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
            <div class="d_icon">
              <div class="d1"> <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" /> </div>
              <div class="d2">
                <h4>Stranger Things</h4>
                <p>Downloading...</p>
              </div>
              <div class="d3"> <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" /> </div>
            </div>
          </div>

        </div>
        <div class="tv_text  d_text" data-aos="fade-right"  data-aos-duration="1100">
          <h1>Download your shows to watch offline.</h1>
          <h2>Save your favorites easily and always have something to watch.</h2>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="t_box" >
        <div class="t_text  only">
          <h1>Watch everywhere.</h1>
          <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="box" data-aos="zoom-in-up"  data-aos-duration="1100">
        <div class=" kids_img">
          <img src="https://occ-0-64-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="" />
        </div>
        <div class=" kids_text">
          <h1>Create profiles for kids.</h1>
          <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
        </div>
      </div>
    </section>





    <footer className="footer p-10 bg-black-500">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hove">Branding</a>
        <a className="link link-hove">Design</a>
        <a className="link link-hove">Marketing</a>
        <a className="link link-hove">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hove">About us</a>
        <a className="link link-hove">Contact</a>
        <a className="link link-hove">Jobs</a>
        <a className="link link-hove">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hove">Terms of use</a>
        <a className="link link-hove">Privacy policy</a>
        <a className="link link-hove">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
            <button className="btn bg-red-700 absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>

    <script src="https://kit.fontawesome.com/5e35d0c07c.js" crossorigin="anonymous"></script>

  </div>
  )
}

export default Login
