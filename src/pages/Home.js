import React from 'react';
import clip from '../images/clipBackground.mp4';
import appStoreBadge from '../images/app-store-badge.svg';
import demo2 from '../images/IMG_3523.PNG';
import logo from '../images/logo1.png';
import {FaHeart} from 'react-icons/fa';
import Features from '../components/Features';

export default function Home() {
    return (
      <>
        <header class="masthead">
          <div class="container h-100">
            <div class="row h-100">
              <div class="col-lg-7 my-auto">
                <div class="header-content mx-auto">
                  <div className="App">
                    <img className="App-logo" src={logo} alt="OutfitPic Logo"/>
                  </div>
                  <h2 class="section-heading"> Be the best dressed!</h2>
                  <a href="#download" class="btn btn-outline-light btn-xl">Start Now for Free!</a>
                </div>
              </div>
              <div class="col-lg-5 my-auto">
                <div class="device-container">
                  <div class="device-mockup iphone6_plus portrait white">
                    <div class="device">
                      <div class="screen">
                        <img src={demo2} class="img-fluid" alt=""/>
                      </div>
                      <div class="button">   
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section class="about" id="download">
          <div class="about-section"> 
              <div class="col-lg-8 mx-auto"> 
                <p class="lead">How it works </p>      
                <p class="mb-0">OutfitPic is an interactive smartphone app where users upload their outfits and ask their friends, as well as other users in the app,</p> 
                <p class="mb-0">to share their opinions by voting for the coolest outfit in polls created by them. The voting system is as simple as one click on your favorite option.</p> 
                <p class="mb-0">The goal is to receive enough feedback to determine whether users should wear their chosen outfits..</p>
              </div>    
          </div>
        </section>

        <section class="download bg-primary text-center" id="download">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto">
                <h2>Discover the fuzz!</h2>
                <p>Our app is available on any iOS device! Download now to get started!</p>
                <div class="badges">
                  <a class="badge-link" href="#"><img src={appStoreBadge} alt="App store logo"/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section class="clip">
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src={clip} type="video/mp4"/>
            </video>
            <div class="container h-100">
              <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                      <h2>Join today!</h2>
                      <p class="lead mb-0">Help others choose their best outfit.</p>
                </div>
              </div>
            </div>
        </section>

        <Features/>

        <section class="contact bg-primary" id="contact">
            <div class="container">
              <h3>We <FaHeart className="nav-icon"/> new friends!</h3>
            </div>
        </section>

        </>
    )
}
