import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { trendingmoviesRequest } from '../../api';
import css from './Home.module.css';

const Home = () => {
  const [moviesTrand, setMoviesTrend] = useState([]);

  useEffect(() => {
    (async function trendingMovies() {
      const res = await trendingmoviesRequest();
      const movies = res.data.results;
      if (movies) {
        setMoviesTrend(movies);
      }
    })();

    return () => {};
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.moviesList}>
        {moviesTrand.map(({ id, name, title }) => (
          <li key={id} className={css.moviesItem}>
            <Link className={css.moviesLink} to={`movies/${id}`} key={id}>
              {title} {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
