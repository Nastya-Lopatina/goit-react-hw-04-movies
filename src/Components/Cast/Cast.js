import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../../Servise/API';
import style from './Cast.module.css';

export default function Cast() {
    const [actors, setActors] = useState([])
    const { movieId } = useParams();
 
    useEffect(() => {
        API.fetchCast(movieId).then(result => setActors(result.cast))
    }, [movieId])

    return (
        <>
            <ul className={style.list}>
                {actors &&
                    actors.map(({ id, profile_path, name, character }) => (
                        <li key={id} className={style.item}>
                            {profile_path ? (
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                                    alt={name}
                                    className={style.foto}
                  
                                />
                            ) : (
                                <img
                                    src="https://www.placecage.com/200/300"
                                        alt={name}
                                        className={style.foto}
                 
                                />
                            )}
                            <p className={style.name}>{name}</p>
                            <p className={style.character}> Character:{character}</p>
                        </li>
                    ))}
            </ul>
        </>
    );
}

Cast.propTypes = {
  match: PropTypes.object.isRequired,
};