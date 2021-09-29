import React, {Component} from "react"
import "./shop.css"
import popular1 from "../img/gallery/popular1.png"
import popular2 from "../img/gallery/popular2.png"
import popular3 from "../img/gallery/popular3.png"
import popular4 from "../img/gallery/popular4.png"
import popular5 from "../img/gallery/popular5.png"
import popular6 from "../img/gallery/popular6.png"

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="shop">

                <div className="popular-head">
                    <p className="popular-title">Popular Items</p>
                    <p className="popular-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nemo mollitia sapiente cupiditate voluptates odio architecto ducimus ut harum!</p>
                </div>

                <div className="cards">

                    <div className="card1">
                        <div className="bg-card">
                            <img src={popular1} alt="" />
                        </div>
                        <p className="shop-text">Thermo Ball Etip Gloves</p>
                        <p className="shop-price">$ 45,743</p>
                    </div>
                    <div className="card2">
                        <div className="bg-card">
                            <img src={popular2} alt="" />
                        </div>
                        <p className="shop-text">Thermo Ball Etip Gloves</p>
                        <p className="shop-price">$ 45,743</p>
                    </div>
                    <div className="card2">
                        <div className="bg-card">
                            <img src={popular3} alt="" />
                        </div>
                        <p className="shop-text">Thermo Ball Etip Gloves</p>
                        <p className="shop-price">$ 45,743</p>
                    </div>
                    <div className="card1">
                        <div className="bg-card">
                            <img src={popular4} alt="" />
                        </div>
                        <p className="shop-text">Thermo Ball Etip Gloves</p>
                        <p className="shop-price">$ 45,743</p>
                    </div>
                    <div className="card2">
                        <div className="bg-card">
                            <img src={popular5} alt="" />
                        </div>
                        <p className="shop-text">Thermo Ball Etip Gloves</p>
                        <p className="shop-price">$ 45,743</p>
                    </div>
                    <div className="card2">
                        <div className="bg-card">
                            <img src={popular6} alt="" />
                        </div>
                        <p className="shop-text">Thermo Ball Etip Gloves</p>
                        <p className="shop-price">$ 45,743</p>
                    </div>
                    

                </div>

                <button className="shop-button">VIEW  MORE  PRODUCTS</button>

            </div>
        );
    }
}
 
export default Shop;