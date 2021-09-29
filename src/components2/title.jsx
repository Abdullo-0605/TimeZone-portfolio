import React, {Component} from "react"
import "./title.css"
import title from "../images/watch.png"

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="bg-color">
                
                <div>
                    <div className="title-start">
                        <p>Select Your New Perfect Style</p>
                    </div>
                    <div className="title-text">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi dignissimos veniam voluptate necessitatibus obcaecati optio cumque mollitia nostrum laborum quisquam!</p>
                    </div>
                    <div className="title-click">
                        <button className="title-button">SHOP NOW</button>
                    </div>
                </div>

                <div className="title-img">
                    <img className="photo1" src={title} alt="" />
                </div>
                
            </div>
        );
    }
}
 
export default Title;