import style from './Movie.module.css'
const Movie = ({ movie }) => {
    const {
        title,
        release_date,
        vote_average,
        poster_path,
        overview,
        genres,
    } = movie

    const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    let releaseYear = '';
    if (!!release_date) {
        releaseYear = release_date.substring(0, 4);
    }

    return (
        <div className={style.movieDetails}>
            <img
                src={posterUrl}
                alt={title}
                title={title}
                 className={style.poster}
            />
            
            <div>
                <h1>{title}({releaseYear})</h1>
                <p>User score:</p>
                <span>{vote_average}%</span>
                <p>Overwiew:</p>
                <span>{overview}</span>
                <p>Genres:</p>
                <ul>
                    {genres.map(({id,name}) => (
                    <li key={id}>{name}</li>
                   ))}
                </ul>
            </div>
        </div>

        
    )
}
export default Movie;
