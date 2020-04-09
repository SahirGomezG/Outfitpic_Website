import React from 'react';
import { Link } from 'react-router-dom';
import demo2 from '../images/IMG_3523.PNG';
import { FaSlideshare, FaChartPie, FaGifts, FaGlobeAmericas, FaRegClock, FaCameraRetro } from 'react-icons/fa';

export default function Features() {
    return (
        <section class="features" id="features">
            <div class="container">
              <div class="section-heading text-center">
                    <h2>Unlimited Creativity, Unlimited Fun</h2>
                    <p class="text-muted">Check out what you can do with this app!</p>
                    <hr/>
              </div>
              <div class="row">
                <div class="col-lg-4 my-auto">
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
                <div class="col-lg-8 my-auto">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="feature-item">
                          <FaGifts className="feature-icon"/>
                          <h3>Free to Use</h3>
                          <p class="text-muted"> Go to your app store and download OutfitPic for free, start sharing your outfits and get ideas from others. It's fun! </p>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="feature-item">
                          <FaSlideshare className="feature-icon"/>   
                          <h3>Make friends</h3>
                          <p class="text-muted">Explore other users' outfits while interacting with them. Vote their polls, like them or comment them.</p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="feature-item">
                          <FaGlobeAmericas className="feature-icon"/>
                          <h3>Pick your audience</h3>
                          <p class="text-muted">Select if you want to share your poll with all users or only followers!</p>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="feature-item">
                          <FaCameraRetro className="feature-icon"/>
                          <h3>Upload your outfits</h3>
                          <p class="text-muted">Use your phone camera or photo album to upload your pics, selfies or even professional photograpies.</p>
                        </div>
                      </div> 
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="feature-item">
                          <FaRegClock className="feature-icon"/>   
                          <h3>Poll Duration</h3>
                          <p class="text-muted">Set up the time you want the post to go live and open to votes</p>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="feature-item">
                          <FaChartPie className="feature-icon"/>
                          <h3>Poll Results</h3>
                          <p class="text-muted">Get a winner! the outfit that most people like, but hey, you know that's only their opinion... </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>
    )
}
