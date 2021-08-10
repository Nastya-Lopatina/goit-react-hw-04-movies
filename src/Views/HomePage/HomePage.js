import { useEffect, useState } from "react";
import { Link, useRouteMatch,useLocation } from "react-router-dom";
import * as API from '../../Servise/API';
import MoviePreview from '../../Components/MoviePreview/MoviePreview'
import style from './HomePage.module.css'

export default function HomePage() {
    const [trendings, setTrendings] = useState([]);
    const { url } = useRouteMatch();
     const location = useLocation();

    useEffect(() => {
        API
            .fetchTrendings()
            .then(result =>
                setTrendings(result.results))
    }, [])
    
    return (
        <div>
            <h1>Trending movies</h1>
            {trendings && (
                <ul className={style.list}>
                    {trendings.map(({id,title,poster_path,vote_average}) => (
                        <li key={id} className={style.item}>
                            <Link  to={{
                              pathname: `${url}movies/${id}`,
                              state: {
                                 from: {
                                 location,
                                 label: 'go back',
                                  },
                              },
                            }} lassName={style.link}>
                                <MoviePreview
                                title={title}
                                poster={poster_path}
                                vote={vote_average}
                            />
                            </Link>

                        </li>
                    ))}
                    
                </ul>
            )}
        </div>
    )
}