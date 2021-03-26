import { Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css'
import React from "react";
import SwiperCore, { Virtual,Pagination } from 'swiper';
import {movied} from '../movie';
SwiperCore.use([Virtual,Pagination]);


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        moviedata: [],
    };
  }

  componentDidMount(){
      this.setState({moviedata:movied})
      console.log(movied)
  }
  render(){
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView:1,
    spaceBetween: 30,
    loop:true
  }
  
  return (
    <div className="home-slider">
    <Swiper onInit={this.sliderchange} onSlideChange={this.sliderchange} {...params} pagination>
    {movied.map((k, z) => (
        <SwiperSlide key={z} style={{backgroundImage: `url(${k.Wallpaper})`,height:'670px'}}>
          <h2>{k.Title}<span>({k.Year})</span></h2>
          <p>Directed by : {k.Director}</p>
          <div className="row">
            <div className="col-2">
              <p className="mb-0" style={{color:'#FFBF49'}}><span style={{fontSize:'45px'}}>{k.imdbRating}</span>/10<br/>
              IMDB</p>
            </div>
            <div className="col-6"><p className="ml-0 mb-0">{k.Plot}</p></div>
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