import React from "react";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtitle: "batman",
      searchyear: "",
      searchid: "",
      searchres: [],
      searchres1: [],
      page: 1,
      loading: false,
      prevY: 0
    };
  }
   componentDidMount() {
    this.updateSearch(1,this.state.page);
     var options = {
      root: null, // Page as root
      rootMargin: "0px",
      threshold: 1.0
    };
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this), //callback
      options
    );
    this.observer.observe(this.loadingRef);
  }
  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
        this.setState({ page: this.state.page + 1 })
    }
    this.setState({ prevY: y });
    this.updateSearch(2,this.state.page);
  }
  updateSearch(event,page) {
    if (this.state.searchid === "") {
      this.setState({ loading: true });
      const apiUrl = `https://www.omdbapi.com/?&apikey=69e759&s=${this.state.searchtitle}&y=${this.state.searchyear}&page=${page}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ searchres: data.Search });
          this.setState({ loading: false });
          toast.warn(data.Error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
          window.scrollTo({ top: 500, behavior: 'smooth' })
        });
    } else {
      const apiUrl = `https://www.omdbapi.com/?&apikey=69e759&i=${this.state.searchid}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ searchres1: data });
          this.setState({ searchres: [] });
        });
    }
  }
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addDefaultSrc(ev) {
    ev.target.src =
      "https://cdn.blankstyle.com/files/imagefield_default_images/notfound_0.png";
  }
  render() {
    const loadingCSS = {
      height: "80px",
      margin: "30px"
    };
    const loadingTextCSS = { display: this.state.loading ? "block" : "none",textAlign:'center',fontSize:'30px' };
    return (
      <div>
      <ToastContainer />
        <h1 className="text-center grey py-5">Explore more movies</h1>
        <div className="container-fluid">
          <div className="searchbox row w-half w-100-sm m-auto py-3">
            <div className="col-lg-3 col-12">
              <input
                type="text"
                name="searchtitle"
                placeholder="Search Title"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-lg-3 col-12">
              <input
                type="text"
                placeholder="Year"
                name="searchyear"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-lg-3 col-12">
              <input
                type="text"
                placeholder="Id"
                name="searchid"
                onChange={this.handleOnChange}
              />
            </div>
            <div className="col-3">
              <button onClick={this.updateSearch.bind(this)}>Search</button>
            </div>
          </div>
          <div className="row px-lg-5 mx-lg-5 pt-5" style={{ minHeight: this.state.searchid ? "0px" : '660px' }}>
            {this.state.searchres?.map((k,index) => (
              <div className="col-sm-12 col-lg-4 my-3" key={index}>
                <Link to={`/${k.Title}`} className="nounderline">
                  <div className="card rounded-3">
                    <div className="row">
                      <div className="col-sm-6 pr-lg-4">
                        <img
                          className="d-block w-100"
                          src={k.Poster}
                          alt="poster-img"
                          onError={this.addDefaultSrc}
                        />
                      </div>
                      <div className="col-sm-6 pl-lg-1">
                        <div className="card-block p-3 p-lg-0">
                          <div className="resp-title">
                            <h3>
                              {k.Title.length > 32
                                ? k.Title.substr(0, 32) + "..."
                                : k.Title}
                            </h3>
                          </div>
                          <span>Year</span>
                          <p>{k.Year}</p>
                          <span>Type</span>
                          <p>{k.Type}</p>
                          <span>Imdb Id</span>
                          <p>{k.imdbID}</p>
                          <p
                            className="float-lg-right text-center mr-4 mb-2"
                          >
                            More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {this.state.searchid && (
              <div className="row px-lg-5 mx-lg-5 pt-lg-5">
              <div className="col-sm-4 my-3">
                <Link to={`/${this.state.searchres1.Title}`} className="nounderline">
                  <div className="card rounded-3">
                    <div className="row">
                      <div className="col-sm-6 pr-lg-4">
                        <img
                          className="d-block w-100"
                          src={this.state.searchres1.Poster}
                          alt="poster-img"
                          onError={this.addDefaultSrc}
                        />
                      </div>
                      <div className="col-sm-6 pl-lg-1">
                        <div className="card-block p-3 p-lg-0">
                          <div className="resp-title">
                            <h3>
                              {this.state.searchres1.Title}
                            </h3>
                          </div>
                          <span>Year</span>
                          <p>{this.state.searchres1.Year}</p>
                          <span>Type</span>
                          <p>{this.state.searchres1.Type}</p>
                          <span>Imdb Id</span>
                          <p>{this.state.searchres1.imdbID}</p>
                          <p
                            className="float-lg-right text-center mr-4 mb-2"
                          >
                            More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
          </div>
            )}
          <div
          ref={loadingRef => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
        </div>
      </div>
    );
  }
}

export default MovieSearch;
