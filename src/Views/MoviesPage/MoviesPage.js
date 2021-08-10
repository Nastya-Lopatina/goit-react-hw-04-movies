import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom'
import * as API from '../../Servise/API';
import Searchbar from '../../Components/Searchbar/Searchbar'
import MoviePreview from '../../Components/MoviePreview/MoviePreview';
import style from './MoviesPage.module.css'

export default function Moviespage() {
    const { url } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const queryParams = new URLSearchParams(location.search).get('query');
    const [searchQuery, setSearchQuery] = useState(queryParams || '');
    const [trendings, setTrendings] = useState([]);
    

    useEffect(() => {
       
     if (!searchQuery) {
      return;
    }
       API
        .fetchMoviesBySearch(searchQuery)
           .then(result => setTrendings(result.results))
        
     history.push({
      pathname: location.pathname,
      search: `query=${searchQuery}`,
    });
 }, [searchQuery, history, location.pathname])
    
    
   

    const onChangeQuery = query => {
        setTrendings([]);
        setSearchQuery(query);
        
     
    }
  
  
return (
            <>
                <Searchbar onSubmit={onChangeQuery} />

                <ul className={style.list}>
                    {trendings.map(({id,title,poster_path,vote_average}) => (
                        <li key={id} className={style.item}>
                            <Link  to={{
                              pathname: `${url}/${id}`,
                              state: {
                                  from: {
                                 search: `query=${searchQuery}`,
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
            </>
        );
    }
