import React, { Component } from 'react';
import logo from '../images/logo1.png';

export default class Contact extends Component {
    render() {
        return (
            <div class="container-fluid">
            <div class="row no-gutter">
              <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image">
                <div className="logoContainer">
                  <img className="contact-logo" src={logo} alt="OutfitPic Logo"/>
                </div>  
              </div>
              <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-9 col-lg-8 mx-auto">
                        <h3 class="login-heading mb-4">Have a question for us? Go for it</h3>
                     
                            <form>
                              <div class="form-group">
                                  <label for="exampleInputEmail1">Email address</label>
                                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                              </div>

                              <div class="form-group">
                                  <label for="name">Name</label>
                                  <input type="text" class="form-control" id="name"/>
                              </div>

                              <div class="form-group">
                                  <label for="textArea">...</label>
                                  <textarea class="form-control" id="textArea" rows="3"></textarea>
                              </div>
                              
                              <button type="submit" class="btn btn-dark">Submit</button>
                            </form>

                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>            
        )
    }
}
