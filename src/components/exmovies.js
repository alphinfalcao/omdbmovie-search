import React from "react";
import { Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore, { Virtual,Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';
SwiperCore.use([Virtual,Navigation]);

class Exmovie extends React.Component {
constructor(props) {
super(props);
this.state = {
emovies:[],
nload:true
};
}
async componentDidMount() {
let Title = window.location.pathname.split( '/' );
let path = Title[1].substring(0,3);
const apiUrl = `https://www.omdbapi.com/?&apikey=69e759&s=${path}`;
const response = await fetch(apiUrl);
const json = await response.json();
this.setState({ emovies: json.Search });
if(typeof(this.state.emovies)==='undefined'){
    this.setState({nload:false})
}
}
addDefaultSrc(ev) {
    ev.target.src =
      "https://cdn.blankstyle.com/files/imagefield_default_images/notfound_0.png";
}
render() {
return (
<div>
<h1 className="text-left grey py-5">Explore more movies</h1>
    {this.state.nload ? <Swiper slidesPerView={3} spaceBetween={50} breakpoints={{
    // when window width is >= 640px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
  }}
        loop={true} observer={true} navigation className='sw-h'>
        {this.state.emovies?.map((k, z) => (
        <SwiperSlide key={z}>
        <Link to={`/${k.Title}`} className="nounderline">
                <div className="card rounded-3">
                    <div className="row">
                        <div className="col-sm-6 pr-lg-4">
                            <img className="d-block w-100" src={k.Poster} alt="poster-img" onError={this.addDefaultSrc} />
                        </div>
                        <div className="col-sm-6">
                            <div className="card-block">
                            <div className="resp-title">
                               <h3>{k.Title.length> 32?k.Title.substr(0,32)+"...":k.Title}</h3>
                               </div>
                                <span>Year</span>
                                <p>{k.Year}</p>
                                <span>Type</span>
                                <p>{k.Type}</p>
                                <span>Imdb Id</span>
                                <p>{k.imdbID}</p>
                                <p className="float-right mr-4 mb-2">More</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
        </SwiperSlide>
        ))}
    </Swiper>: <p className="text-center">No Similar Movies Found</p> }
</div>

);
}

}
export default Exmovie;