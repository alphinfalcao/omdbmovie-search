import { Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css'
import React from "react";
import SwiperCore, { Virtual,Pagination,Autoplay } from 'swiper';
import {movied} from '../movie';
SwiperCore.use([Virtual,Pagination,Autoplay]);



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        moviedata: [],
    };
  }

  componentDidMount(){
      this.setState({moviedata:movied})
  }
  render(){
  const params = {
    slidesPerView:1,
    loop:true,
    autoplay: {
      delay: 2500,
    },
  }
  
  return (
    <div className="home-slider">
    <Swiper  {...params} pagination>
    {movied.map((k, z) => (
        <SwiperSlide key={z} style={{backgroundImage: `url(${k.Wallpaper})`,height:'680px'}}>
          <h2>{k.Title}<span>({k.Year})</span></h2>
          <p>Directed by : {k.Director}</p>
          <div className="row">
            <div className="col-12 col-lg-2">
              <p className="mb-0" style={{color:'#FFBF49'}}><span style={{fontSize:'45px'}}>{k.imdbRating}</span>/10<br/>
              IMDB</p>
            </div>
            <div className="col-12 col-lg-6"><p className="ml-0 mb-0">{k.Plot}</p></div>
          </div>
          <p className="mb-0 pt-5"><span>{k.Runtime}</span> | <span>{k.Genre}</span> | <span>{k.Language}</span></p>
          </SwiperSlide>
          ))}
    </Swiper>
    </div>
  );
}
}

export default Carousel;