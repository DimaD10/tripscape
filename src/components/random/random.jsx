import classes from './random.module.scss';
import RandomCard from '../random-card/random-card.jsx';
import cards from '../../data/locationList.json';

const Random = () => {
    return (
        <div className={classes.random}>
            <div className={classes.random__container}>
                <div className={classes.popularHead}>
                    <h2 className={classes.title}>
                        Random tours
                    </h2>
                </div>
                <div className={classes.popularMain}>
                    {cards.map((obj) => (
                        <RandomCard key={obj.title} title={obj.title} image={obj.image} about={obj.about} />
                    ))}
                </div>
                <a href='#' className={`${classes.more} ${classes._main}`}>Load more</a>
            </div>
        </div>
    );
}

export default Random;