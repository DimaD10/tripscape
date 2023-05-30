import classes from './footer.module.scss';
import Logo from '../logo/logo.jsx';

import insta from '../../assets/img/icons/insta.svg';
import fb from '../../assets/img/icons/facebook.svg';

import menuLinks from '../../data/footer-data.json';
const socialLinks = [
    insta,
    fb,
]

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__containerBig}>
                <div className={classes.footerInfo}>
                    <Logo />
                    <div className={classes.copyright}>©Traveler 2023</div>
                </div>
                <div className={classes.block}>
                    <h2 className={classes.title}>Navigation</h2>
                    <ul className={classes.menu}>
                        {menuLinks.map((obj) => (
                            <li key={obj} className={classes.menu__el}>
                                <a href='#'>{obj}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={classes.block}>
                    <h2 className={classes.title}>Contact us</h2>
                    <ul className={classes.socialMenu}>
                        {socialLinks.map((obj, i) => (
                            <li key={i} className={classes.menu__el}>
                                <a href='#'>
                                    <img src={obj} alt="" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${classes.copyright} ${classes.copyright_general}`}>©Traveler 2023</div>
            </div>
        </div>
    );
}

export default Footer;
  