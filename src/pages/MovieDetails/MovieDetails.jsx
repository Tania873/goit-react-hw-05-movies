import { Suspense, useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { movieInfoRequest } from '../../api';
import { AboutMovie } from 'components/AboutMovie/AboutMovie';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    (async function aboutMovie() {
      const res = await movieInfoRequest(movieId);
      if (res.data.length === 0) {
        return;
      }
      setMovieInfo(res.data);
      setIsLoading(false);
    })();

    return () => {};
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link className={css.goBackLink} to={backLinkHref.current ?? '/'}>
        &#8678; Go back
      </Link>

      {isLoading && <Loader />}
      {!isLoading && <AboutMovie movieInfo={movieInfo} />}

      <div className={css.box}>
        <p className={css.moreInfoTitle}>Additional information</p>
        <ul className={css.moreInfoList}>
          <li>
            <Link className={css.moreInfoLink} to={'cast'}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.moreInfoLink} to={'reviews'}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
