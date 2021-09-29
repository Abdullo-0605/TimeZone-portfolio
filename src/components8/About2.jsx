import React, {Component} from "react"
import "./about2.css"
import watch2 from "../img/gallery/watch2.png"

class About2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="about">

                <div className="about-start">

                    <div className="section1">
                        <img src={watch2} alt="" />
                    </div>

                    <div className="section2">
                        <p className="about-title">Watch of Choice</p>
                        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iste deleniti veritatis non facilis magni ipsum facere aperiam exercitationem! Aliquid in ad vitae.</p>
                        <button className="about-button">SHOW WATCHES</button>
                    </div>

                </div>

            </div>
        );
    }
}
 
export default About2;