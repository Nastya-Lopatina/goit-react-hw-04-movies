import {  NavLink} from 'react-router-dom';
import style from './Novigation.module.css';


const Navigation = () =>
    <nav className={style.nav}>
        <ul className={style.list}>
            <li className={style.item}>
                < NavLink
                    exact
                    to='/'
                    className={style.link}
                    activeClassName={style.active}
                >
                    Home
                </ NavLink>
            </li>
            <li>
                < NavLink
                    to='/movies'
                    className={style.link}
                    activeClassName={style["active"]}
                >
                    Movies
               </ NavLink>
             </li>
        </ul>
    
    
</nav>;

export default Navigation; 