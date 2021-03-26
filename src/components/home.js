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

    render(){
    return (
        <React.Fragment>
        {this.state.loading ? <Loader/> : <div>
            <Header/>
            <Carousel/>
            <MovieSearch/>
        </div>}
        </React.Fragment>
    );
  }
}


export default Home;