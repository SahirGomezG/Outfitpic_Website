import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
          <footer>
            <div class="container">
              <p>&copy; OutfitPic 2020. All Rights Reserved.</p>
              <ul class="list-inline">
                <li class="list-inline-item">
                    <Link to="/terms-conditions">Terms</Link>
                </li>
                <li class="list-inline-item">
                    <Link to="/privacy-policy">Privacy</Link>
                </li>
                <li class="list-inline-item">
                    <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </footer>
    )
}
