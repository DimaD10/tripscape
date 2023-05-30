import classes from './catalog.module.scss';
import CatalogCard from '../catalog-card/catalog-card.jsx';
import React from 'react';
import cards from '../../data/сategories.json';

const Catalog = () => {
    const count = 20;

    return (
        <div className={classes.catalog}>
            <div className={classes.catalog__container}>
                <div className={classes.header}>
                    <h2 className={classes.title}>Categories</h2>
                    <a href='#' className={classes.more}>more categories</a>
                </div>
                <div className={classes.list}>
                    {Array.from({ length: count }).map((_, index) => (
                        <CatalogCard
                            key={cards[index].title}
                            title={cards[index].title}
                            image={cards[index].image}
                            about={cards[index].about}
                        />
                    ))}
                </div>
                <a href='#' className={`${classes.more} ${classes._main}`}>more categories</a>
            </div>
        </div>
    );
}

export default Catalog;
