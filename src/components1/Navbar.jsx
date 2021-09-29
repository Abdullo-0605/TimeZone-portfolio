import React, {Component} from 'react';
import "./navbar.css"
import logo from "../img/logo/logo2_footer.png"
import search from "../images/loupe.svg"
import user from "../images/user.svg"
import shopping from "../images/cart.svg"
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }
    render() { 
        return (  
            <nav>
                <div className="container">

                    <div className="head">
                        <img src={logo} alt="" />    
                    </div>

                    <ul className="navs">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/latest">Latest</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <div className="navbar-icons">
                        <div className="navbar-icon"><img src={search} alt="" /></div>
                        <div className="navbar-icon"><img src={user} alt="" /></div>
                        <div className="navbar-icon"><img src={shopping} alt="" /></div>
                    </div>

                </div>
            </nav>
        );
    }
}
 
export default Navbar;