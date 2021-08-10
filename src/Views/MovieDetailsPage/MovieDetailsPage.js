import { useEffect, useState,Suspense, lazy } from "react";
import { Route, useHistory, useLocation, useRouteMatch,useParams,NavLink} from 'react-router-dom';
import * as API from '../../Servise/API';
import Movie from "../../Components/Movie/Movie";
import style from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../../Components/Cast/Cast'));
const Reviews = lazy(() => import('../../Components/Reviews/Reviews'));

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();

    const location = useLocation();
    const history = useHistory();

    const handleGoBack = () => {
    history.push(location?.state?.from?.location || '/');
    };

    useEffect(() => {
        API.fetchMovieById(movieId).then(setMovie)
    }, [movieId])
    
    return (
        <div>
            <button  type="button" onClick={handleGoBack}>
          go back
            </button>

        {movie && <Movie movie={movie} />}
        
             <h3>Additional information</h3>

          <ul>
            <li>
              <NavLink
                to={{ ...location, pathname: `${url}/cast` }}
                className={style.link}
                activeClassName={style.active}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ ...location, pathname: `${url}/reviews` }}
                className={style.link}
                activeClassName={style.active}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
           <Suspense fallback={<h2>Loading...</h2>}>
            <Route path={`${path}/cast`}>
              <Cast />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </div>
    )
}