import React, { Component } from 'react';
import background from '../images/demo5.png';

export default class Contact extends Component {
  /*constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });*/


    render() {
      const { name, email, message } = this.state;
        return (
            <div class="container-fluid">
            <div class="row">
              <div class=" d-flex col-md-4 col-lg-6 bg-image">
                  
                  <img class="contact-logo" src={background} alt="OutfitPic Logo"/>
            
              </div>
              <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-9 col-lg-8 mx-auto">
                        <h3 class="login-heading mb-4">Have a question for us? Go for it</h3>
                     
                            <form name="contact" method="post">
                              <input type="hidden" name="form-name" value="contact" />
                              <div class="form-group">
                                  <label>Your Email: <input type="email" name="email"/></label>
                                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                              </div>

                              <div class="form-group">
                                  <label>Your Name: <input type="text" name="name"/></label>
                                 
                              </div> 

                              <div class="form-group">
                                  <label>Message: <textarea name="message"></textarea></label>

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

/*<form name="contact" method="POST" data-netlify="true">
                                <p>
                                  <label>Your Name: <input type="text" name="name" /></label>   
                                </p>
                                <p>
                                  <label>Your Email: <input type="email" name="email" /></label>
                                </p>
                                <p>
                                  <label>Active User?: <select name="user[]" multiple>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select></label>
                                </p>
                                <p>
                                  <label>Message: <textarea name="message"></textarea></label>
                                </p>
                                <p>
                                  <button type="submit">Send</button>
                                </p>
                              </form>*/

                              /* <div class="form-group">
                                <label>Active User?: <select name="user[]" multiple>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select></label>
                              </div> */


                              /*<form name="contact" method="POST" data-netlify="true">
                              <div class="form-group">
                                  <label>Your Email: </label>
                                  <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp"/>
                                  
                                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                              </div>

                              <div class="form-group">
                                  <label>Your Name: </label>  
                                  <input type="text" class="form-control" name="name" />
                              </div> 

                              <div class="form-group">
                                  <label>Message: </label>
                                  <textarea class="form-control" name="message" rows="3"></textarea>

                              </div>
                              <button type="submit" class="btn btn-dark">Submit</button>
                      
                            </form>*/