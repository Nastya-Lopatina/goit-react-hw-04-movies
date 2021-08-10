import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../Servise/API';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const {movieId} = useParams();
    
    useEffect(() => {
    API.fetchReviews(movieId).then(result => setReviews(result.results))
    }, [movieId])
    
  
    
    return (
        <div>
       {reviews.length > 0 ? (
        <ul >
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                  <h3>Author:{author}</h3>
                  <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
        </div>
    )

}