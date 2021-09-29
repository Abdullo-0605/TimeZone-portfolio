import React, {Component} from "react"
import "./about.css"
import watch1 from "../img/gallery/watch1.png"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="about">

                <div className="about-start">

                    <div className="section1">
                        <p className="about-title">Watch of Choice</p>
                        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iste deleniti veritatis non facilis magni ipsum facere aperiam exercitationem! Aliquid in ad vitae.</p>
                        <button className="about-button">SHOW WATCHES</button>
                    </div>

                    <div className="section2">
                        <img src={watch1} alt="" />
                    </div>

                </div>

            </div>
        );
    }
}
 
export default About;