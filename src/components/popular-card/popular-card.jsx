import classes from './popular-card.module.scss';
import React, { useState } from 'react';

const PopularCard = ({ image, title, about }) => {

    const [favorite, setFavorite] = useState(false);

    return (
        
        <div className={classes.popularCard}>
            <button className={`${classes.favorite} ${favorite ? classes._isFavorite : ''}`} onClick={(e) => setFavorite(!favorite)}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.05323 13.3443L11.7533 21.5306C12.053 21.8125 12.2028 21.9535 12.3795 21.9882C12.4591 22.0039 12.5409 22.0039 12.6205 21.9882C12.7972 21.9535 12.947 21.8125 13.2467 21.5306L21.9468 13.3443C24.3946 11.0411 24.6918 7.2508 22.6331 4.59293L22.2461 4.09316C19.7832 0.913593 14.8395 1.44683 13.109 5.07872C12.8645 5.59175 12.1355 5.59175 11.891 5.07872C10.1605 1.44683 5.21686 0.913593 2.754 4.09318L2.3669 4.59293C0.308141 7.2508 0.605396 11.0411 3.05323 13.3443Z" stroke="#EB404E" strokeWidth="2"/>
                </svg>
            </button>

            <a href='#' className={classes.preview}>
                <img src={image} alt="" />
            </a>
            <a href='#' className={classes.title}>{title}</a>
            <p className={classes.paragraph}>
                {about}
            </p>
            <a href="#" className={classes.link}>See more</a>
        </div>
    );
}

export default PopularCard;