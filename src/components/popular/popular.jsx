import classes from './popular.module.scss';
import PopularCard from '../popular-card/popular-card.jsx';
import popularData from '../../data/locationList.json'

const Popular = () => {
    return (
        <div className={classes.popular}>
            <div className={classes.popular__container}>
                <div className={classes.popularHead}>
                    <h2 className={classes.title}>
                        <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M35.3947 31.0461C34.9999 40.4757 27.2335 48 17.7069 48C7.9276 48 1.24297e-05 39.8059 1.24297e-05 30.2931C1.24297e-05 29.0216 -0.0227805 26.4805 1.88372 22.1932C3.02468 19.6274 3.7403 18.0155 4.14417 16.5421C4.36607 15.7323 4.79763 14.4457 6.02788 16.5421C6.75329 17.7782 6.78136 19.556 6.78136 19.556C6.78136 19.556 9.48034 17.4849 11.3023 13.5281C13.9732 7.72764 11.8421 4.2603 11.1139 1.84915C10.8618 1.01505 10.7036 -0.484008 12.4325 0.153815C14.1941 0.803883 18.8514 4.06402 21.2859 7.50028C24.7604 12.4045 25.9952 17.1072 25.9952 17.1072C25.9952 17.1072 27.1077 15.7264 27.5021 14.2816C27.9476 12.6501 27.9542 11.0343 29.3857 12.7748C30.747 14.4301 32.7688 17.5406 33.9068 20.4979C35.973 25.8681 35.3947 31.0461 35.3947 31.0461Z" fill="url(#paint0_linear_6_3)"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.7069 48C10.9445 48 5.46277 42.5182 5.46277 35.7559C5.46277 31.6756 7.10706 29.1983 10.5292 25.8389C12.7203 23.6879 14.7711 21.046 15.6427 19.2471C15.8143 18.8929 16.2048 17.0475 17.7104 19.2083C18.5003 20.3415 19.7385 22.3569 20.5324 24.0769C21.9011 27.0424 22.2278 29.9164 22.2278 29.9164C22.2278 29.9164 23.5692 29.126 24.4882 27.0908C24.7845 26.4349 25.3835 23.9518 27.0582 26.4346C28.2869 28.2565 29.9749 31.5322 29.951 35.7559C29.951 42.5182 24.469 48 17.7069 48Z" fill="#FC9502"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.8952 34.6257C19.6377 34.6257 19.6377 37.8523 21.851 42.1605C23.3248 45.0292 21.1203 48 17.8952 48C14.6701 48 12.9976 45.3856 12.9976 42.1605C12.9976 38.9356 16.1528 34.6257 17.8952 34.6257Z" fill="#FCE202"/>
                            <defs>
                                <linearGradient id="paint0_linear_6_3" x1="17.7334" y1="48.0354" x2="17.7334" y2="0.0362714" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF4C0D"/>
                                    <stop offset="1" stopColor="#FC9502"/>
                                </linearGradient>
                            </defs>
                        </svg>

                        <span>Popular now</span>
                    </h2>
                    <a href='#' className={classes.more}>more</a>
                </div>
                <div className={classes.popularMain}>
                    {popularData.map((obj) => (
                        <PopularCard key={obj.title} title={obj.title} image={obj.image} about={obj.about} />
                    ))}
                </div>
                <a href='#' className={`${classes.more} ${classes._main}`}>More</a>
            </div>
        </div>
    );
}

export default Popular;