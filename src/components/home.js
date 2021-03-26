import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import MovieSearch from "./moviesearch";

function Home() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <MovieSearch/>
        </div>
    );
  }


export default Home;