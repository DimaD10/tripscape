import classes from './catalog.module.scss';
import CatalogCard from '../catalog-card/catalog-card.jsx';
import Skeleton from '../catalog-card/skeleton.jsx';
import React from 'react';

const Catalog = () => {
    const [itemsCat, setItemsCat] = React.useState(6);
    const [isLoading, setIsLoading] = React.useState(false);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        setIsLoading(true);
        fetch('https://644a8575a8370fb321511de2.mockapi.io/cardsContent')
            .then((res) => res.json())
            .then(data => {
                setCards(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching cards:', error);
                setIsLoading(false);
            });
    }, []);

    const loadMore = (e) => {
        let maxCount = cards.length;
        let countCards;
        if (itemsCat === maxCount) {
            setItemsCat(6);
            e.target.textContent = 'Load more';
        } else {
            countCards = itemsCat + 6;
            if (countCards >= maxCount) {
                setItemsCat(maxCount);
                e.target.textContent = 'Hide';
            } else {
                setItemsCat(countCards);
            }
        }
    };

    return (
        <div className={classes.catalog}>
            <div className={classes.catalog__container}>
                <div className={classes.header}>
                    <h2 className={classes.title}>Categories</h2>
                    <a href='#' className={classes.more}>more categories</a>
                </div>
                <div className={classes.list}>
                    {Array.from({ length: itemsCat }).map((_, index) =>
                        isLoading ? <Skeleton key={index} /> :
                            <CatalogCard
                                key={cards[index]?.title}
                                title={cards[index]?.title}
                                image={cards[index]?.image}
                                about={cards[index]?.about}
                            />
                    )}
                </div>
                <button onClick={loadMore} className={`${classes.moreBtn} ${classes.more}`}>Load more</button>
                <a href='#' className={`${classes.more} ${classes._main}`}>more categories</a>
            </div>
        </div>
    );
}

export default Catalog;
