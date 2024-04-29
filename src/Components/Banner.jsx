import { useState, useEffect } from "react";
import axios from "axios";
import api from "../APIs/Api";

const Base_url = "https://api.themoviedb.org/3";
const Base_ImgUrl = "https://image.tmdb.org/t/p/original/";

const Banner = ({ fetchBanner }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    //fetching the movie data
    const Fetchdata = async () => {
      try {
        const response = await axios.get(
          `${Base_url}${api.fetchTopratedmovies}`
        );
        console.log(response);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.error(error);
      }
    };
    Fetchdata();
    return () => {};
  }, [fetchBanner]);
  let trimString = function (string, len) {
    return string?.length > len ? string.substring(0, len - 1) + "..." : string;
  };

  return (
    <section className="container-fluid">
      <img
        src={`${Base_ImgUrl}${movie?.backdrop_path}`}
        alt=""
        className="banner"
      />
      <div className="info" id="info-container">
        <h3 className="text-light fw-bold">
          {movie?.title || movie?.original_title}
        </h3>
        <p className=" text-light">
          {trimString(movie?.overview, 200)}
        </p>
        <div className="d-grid  d-md-block bg-transparent" id="btn-grid">
          <button className="btn btn-light mx-1" type="button">
            <i className="bi bi-play-fill bg-transparent"></i>Play
          </button>
          <button
            className="btn btn-light mx-1 bg-transparent text-white"
            type="button"
          >
            <i className="bi bi-info-circle bg-transparent"></i>More info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
// {/* {movie.map((item,i)=>{
//          return(
//           <img src={${Base_ImgUrl}${item[0].backdrop_path}} alt="img" style={{width:'100%'}} />
//          )
//       })} */}
//       {movie.length > 0 && (
//         <img
//           src={`${Base_ImgUrl}${movie[6].backdrop_path}`}
//           alt="img"
//           style={{ width: "100%" }}
//         />
//       )}
