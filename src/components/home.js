import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import MovieSearch from "./moviesearch";
import Loader from './loader';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading:true
        };
      }
    componentDidMount(){
       this.setState({loading:false})
    }
    top =()=>{
      window.scrollTo({ top: 500, behavior: 'smooth' })
    } 
    render(){
    return (
        <React.Fragment>
        {this.state.loading ? <Loader/> : <div>
            <Header/>
            <Carousel/>
            <MovieSearch/>
        </div>}
        <button className="scrolltop" onClick={this.top}>☝️</button>
        </React.Fragment>
    );
  }
}


export default Home;