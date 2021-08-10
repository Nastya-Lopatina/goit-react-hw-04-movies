import React from 'react';
import Navigation from '../Novigation/Novigation';
import style from './AppBar.module.css'

const AppBar = () => {
    return (
        <header className={style.header}>
            <Navigation/>
        </header>
    )
}
export default AppBar;