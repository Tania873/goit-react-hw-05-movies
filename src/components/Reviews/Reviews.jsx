import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { reviewsRequest } from '../../api';
import Loader from '../Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    (async function reviewsInfo() {
      const res = await reviewsRequest(movieId);
      setReviewsInfo(res.data.results);
      setIsLoading(false);
    })();

    return () => {};
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <ul className={css.reviewsInfoList}>
          {reviewsInfo.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author: {author}</b>
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && reviewsInfo.length === 0 && (
        <div className={css.noInfo}>No information for this movie</div>
      )}
    </>
  );
};

export default Reviews;

// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// import { reviewsRequest } from '../../api';
// import { ReviewsInfoList } from './Reviews.styles';
// import Loader from '../Loader/Loader';

// const Reviews = () => {
//   const { movieId } = useParams();
//   const [reviewsInfo, setReviewsInfo] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!movieId) {
//       return;
//     }

//     (async function reviewsInfo() {
//       const res = await reviewsRequest(movieId);
//       setReviewsInfo(res.data.results);
//       setIsLoading(false);
//     })();

//     return () => {};
//   }, [movieId]);

//   return (
//     <>
//       {isLoading && <Loader />}
//       {!isLoading && (
//         <ReviewsInfoList>
//           {reviewsInfo.map(({ id, author, content }) => (
//             <li key={id}>
//               <p>
//                 <b>Author: </b>
//                 {author}
//               </p>
//               <p>{content}</p>
//             </li>
//           ))}
//         </ReviewsInfoList>
//       )}
//       {!isLoading && reviewsInfo.length === 0 && (
//         <div>No information for this movie</div>
//       )}
//     </>
//   );
// };

// export default Reviews;
