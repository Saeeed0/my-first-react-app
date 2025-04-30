import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrending();
  }, []);

  async function getTrending() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b8cf2a461d1937e05dc7e312d59b6ce9"
    );
    setLoading(false);
    setTrendingMovies(data.results);
    console.log(data.results);
  }

  return (
    <>
      {loading ? (
        <div className="">Loading....</div>
      ) : (
        <div className="row">
          {trendingMovies.map((movie) => (
            <div className="movie col-3 bg-light p-3" key={movie.id}>
              <img
                className="w-100"
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                alt=""
              />
              <h2 className="h6">{movie.title}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
