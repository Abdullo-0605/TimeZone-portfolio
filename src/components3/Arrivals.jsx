import React, {Component} from "react"
import "./arrival.css"
import product1 from "../img/gallery/new_product1.png"
import product2 from "../img/gallery/new_product2.png"
import product3 from "../img/gallery/new_product3.png"

class Arrivals extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="arrivals">

                <div className="arrivals-title">
                    <p>New Arrivals</p>
                </div>

                <div className="arrival-start">

                    <div className="arrivals-photo">

                        <div className="arrival-img1">
                            <img src={product1} alt="" />
                            <p className="arrival-text">Thermo Ball Etip Gloves</p>
                            <p className="arrival-price">$ 45,743</p>
                        </div>
                        <div className="arrival-img">
                            <img src={product2} alt="" />
                            <p className="arrival-text">Thermo Ball Etip Gloves</p>
                            <p className="arrival-price">$ 45,743</p>
                        </div>
                        <div className="arrival-img">
                            <img src={product3} alt="" />
                            <p className="arrival-text">Thermo Ball Etip Gloves</p>
                            <p className="arrival-price">$ 45,743</p>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
 
export default Arrivals;