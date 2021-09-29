import React, {Component} from "react"
import "./video.css"
import play from "../images/play.svg"
import right from "../images/right.svg"

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="video">

                <div className="video-bg">
                    <div className="video-start">
                        <div className="play">
                            <img className="play-button" src={play} alt="" />
                        </div>
                    </div>

                    <div className="right-start">
                        <div className="right">
                            <div className="right-section">
                                <p className="right-text">NEXT VIDEO</p>
                                <div className="right-div">
                                    <img className="right-button" src={right} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Video;