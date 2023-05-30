import classes from './logo.module.scss'
import logoIcon from '../../assets/img/sun-icon.svg';

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={logoIcon} alt="" className={classes.logoImg} />
            <span>TripScape</span>
        </div>
    );
}
  
export default Logo;