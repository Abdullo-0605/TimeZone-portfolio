import React, {Component} from "react"
import "./gallery.css"
import gallery1 from "../img/gallery/gallery1.png"
import gallery2 from "../img/gallery/gallery2.png"
import gallery3 from "../img/gallery/gallery3.png"
import gallery4 from "../img/gallery/gallery4.png"


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="gallery">

                <div className="gallery-photos">
                    <div className="image1"><img className="gallery-img" src={gallery1} alt="" /></div>
                    <div className="image2"><img className="gallery-img" src={gallery2} alt="" /></div>

                    <div className="image3-4">
                        <div className="image3">
                            <img className="gallery-img" src={gallery3} alt="" />
                        </div>
                        <div className="image4">
                        <img className="gallery-img" src={gallery4} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default Gallery;