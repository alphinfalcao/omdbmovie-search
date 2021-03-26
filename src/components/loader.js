import React, { Component } from "react";
import loaderImg from "../images/loading.gif";


class Loader extends Component{
    render(){
        return <div>
             <div className="loading-container">
                <div className="loading">
                <img src={loaderImg} width="50%"></img>
                </div>
            </div>
            </div>
    }
}
export default Loader