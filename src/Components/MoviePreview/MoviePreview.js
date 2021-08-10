import PropTypes from 'prop-types';
import style from './MoviePreview.module.css'
  
const MoviePreview = ({ title, poster}) => {
      const posterUrl = `https://image.tmdb.org/t/p/w500/${poster}`;

      return (
          <div className={style.card}>
              <div className={style.thumb}>
                  <img width = '350'
                      src={posterUrl}
                      alt={title}
                      title={title}
                      className={style.poster}
                  />
              </div>
              <p>
                  <span className={style.title}>{title}</span>
              </p>
          </div>
      )
  }

  MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  vote: PropTypes.number,
};
    
export default MoviePreview;