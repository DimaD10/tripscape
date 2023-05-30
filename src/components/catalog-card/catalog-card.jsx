import classes from './catalog-card.module.scss';

const PopularCard = ({ image, title, about }) => {
    return (
        <a href='#' className={classes.catalogCard}>
            <span className={classes.preview}>
                <img src={image} alt="" />
            </span>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.about}>{about}</p>
        </a>
    );
}

export default PopularCard;