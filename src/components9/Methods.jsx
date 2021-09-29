import React, {Component} from "react"
import "./methods.css"
import cube from "../images/block.svg"
import secure from "../images/secure.svg"
import restart from "../images/backup.svg"

class Method extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="methods">
                <div className="method-start">

                    <div className="method1">
                        <div className="method1-img">
                            <img className="method1-photo" src={cube} alt="" />
                        </div>
                        <p className="method1-title">Free Shipping Method</p>
                        <p className="method1-text">Lorem ipsum dolor sit amet, consectetur.</p>
                        <p className="method1-text"> adipisicing elit. Molestias.</p>
                    </div>

                    <div className="method1">
                        <div className="method1-img">
                            <img className="method1-photo" src={secure} alt="" />
                        </div>
                        <p className="method1-title">Secure Payment System</p>
                        <p className="method1-text">Lorem ipsum dolor sit amet, consectetur.</p>
                        <p className="method1-text"> adipisicing elit. Molestias.</p>
                    </div>

                    <div className="method1">
                        <div className="method1-img">
                            <img className="method1-photo" src={restart} alt="" />
                        </div>
                        <p className="method1-title">Secure Payment System</p>
                        <p className="method1-text">Lorem ipsum dolor sit amet, consectetur.</p>
                        <p className="method1-text"> adipisicing elit. Molestias.</p>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default Method;