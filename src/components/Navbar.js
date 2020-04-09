import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state={
        isOpen: false
    };

    hanldeToggle =()=> {
        this.setState({ isOpen: !this.state.isOpen});
    };

    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <div class="container">
                    <Link class="navbar-brand js-scroll-trigger" to='/'>OutfitPic</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="/#download">Download</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="/#features">Features</a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}   

/*<nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                            <img src={logo} alt="logo"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.hanldeToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li> 
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>   
                    </ul>
                </div>
            </nav>*/