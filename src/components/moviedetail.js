import React from "react";
import Exmovie from './exmovies';
import Loader from "./loader";


class MovieDetail extends React.Component {
    constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      mdetails:[],
      loading:true
    };
  }
    async componentDidMount() {
    let t=window.location.pathname.split("/");
    let title=unescape(t[1]);
    const apiUrl = `https://www.omdbapi.com/?&apikey=69e759&t=${title}&plot=full`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    if(response){
    this.setState({ mdetails: json });
    this.setState({loading:false});
    }
  }
    goBack(){
    this.props.history.goBack();
    }
    render() {
    return (
        <section>
        <button type="button" className="closeb d-none d-lg-block d-xl-block" onClick={this.goBack}>X</button>
        {
                    this.state.loading ? <Loader/> : <div>
                    <div className='banner'>
            <img src={this.state.mdetails.Poster} alt="movie-poster" className="img-fl"/>
            <h2 className="title d-none d-lg-block d-xl-block">{this.state.mdetails.Title}</h2>
            <p className="direcor d-none d-lg-block d-xl-block">Directed by : {this.state.mdetails.Director}</p>
            <p className="mdetails d-none d-lg-block d-xl-block"><span>{this.state.mdetails.Runtime}</span>  |  <span>{this.state.mdetails.Genre}</span>  |  <span>{this.state.mdetails.Language}</span></p>
            <p className="mb-0 imdbr d-none d-lg-block d-xl-block" style={{color: 'rgb(255, 191, 73)'}}><span style={{fontSize: '45px'}}>{this.state.mdetails.imdbRating}</span>/10<br/>IMDB</p>
            <p className="mb-0 meta d-none d-lg-block d-xl-block" style={{color: 'rgb(255, 191, 73)'}}><span style={{fontSize: '45px'}}>{this.state.mdetails.Metascore}</span>/100<br/>Rotten Tomatoes</p>
        </div>
        <div className="w-75 m-auto py-5">     
            <div className="plot">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <h3>PLOT:</h3>
                    </div>
                    <div className="col-lg-6 col-12">
                        <p>
                            {this.state.mdetails.Plot}
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-grey py-5">
            <div className="w-75 m-auto pt-5">
            <div className="crew">
                <div className="row">
                    <div className="col-lg-4 col-12"><h3>CREW:</h3></div>
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <p className="gb">Directed by:</p>
                                <p>{this.state.mdetails.Director}</p>
                            </div>
                            <div className="col-12 col-lg-4">
                                 <p className="gb">Writer</p>
                                <p>{this.state.mdetails.Writer}</p>
                            </div>
                            <div className="col-12 col-lg-4">
                                <p className="gb">Actors</p>
                                <p>{this.state.mdetails.Actors}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="w-100-sm w-75 m-auto">
            <div className="exmovies">
                <Exmovie/>
            </div>
            </div>
                    </div>
        }
       
        </section>
        );
  }
}

export default MovieDetail;
