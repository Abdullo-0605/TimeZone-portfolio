import React, {Component} from "react"
import "./end.css"
import end from "../img/logo/logo.png"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import be from "../images/be.svg"
import globe from "../images/world.svg"
import like from "../images/like.svg" 


class End extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="end">
                <div className="end-start">

                    <div className="end1">
                        <img src={end} alt="" />
                        <p className="end-text1-1">Asorem ipsum adipolor sdit amet,</p>
                        <p className="end-text1">consectetur adipisicing elitcf sed do</p>
                        <p className="end-text1">eiusmod tem.</p>
                    </div>

                    <div className="end2">
                        <p className="end-title2">Quick Links</p>
                        <p className="end-text2-2">About</p>
                        <p className="end-text2">Offers & Discount</p>
                        <p className="end-text2">Get Coupon</p>
                        <p className="end-text2">Contanct us</p>
                    </div>

                    <div className="end3">
                        <p className="end-title2">New Products</p>
                        <p className="end-text2-2">Woman Cloth</p>
                        <p className="end-text2">Fashion Accessories</p>
                        <p className="end-text2">Man Accessories</p>
                        <p className="end-text2">Rubber made Toys</p>
                    </div>

                    <div className="end4">
                        <p className="end-title2">Support</p>
                        <p className="end-text2-2">Frequently Asked Questions</p>
                        <p className="end-text2">Terms & Conditions</p>
                        <p className="end-text2">Privacy Policy</p>
                        <p className="end-text2">Report a Payment Issue</p>
                    </div>

                </div>
                <div className="goodbye">

                    <div className="end5">
                        <p className="end-text5">Copyright ©2021 All rights reserved | This template is made with</p>
                        <img className="like" src={like} alt="" />
                        <p className="dsd">by</p>
                        <p className="sds"> Colorlib</p>
                    </div>

                    <div className="last-images">
                        <div className="end5-images">
                            <img className="last-photos" src={twitter} alt="" />
                        </div>
                        <div className="end5-images">
                            <img className="last-photos" src={facebook} alt="" />
                        </div>
                        <div className="end5-images">
                            <img className="last-photos" src={be} alt="" />
                        </div>
                        <div className="end5-images">
                            <img className="last-photos" src={globe} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
 

export default End;