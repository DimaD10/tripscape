import {useState} from 'react';
import classes from './header-nav.module.scss';

import categories from '../../data/header-data.json';

const HeaderNav = ({isMenuOpen}) => {
  const [activeEl, setActiveEl] = useState(0);

  const setCategory = (index) => {
    setActiveEl(index)
  }

  const menuClass = isMenuOpen ? `${classes.navigation} ${classes.opened}` : `${classes.navigation}`;
  return (
    <div className={menuClass}>
      <ul className={classes.navigationWrapper}>
        {categories.map((obg, i) => (
          <li key={obg} onClick={() => setCategory(i)} className={`${classes.navigationEl} ${activeEl === i ? classes.active : ""}`}>{obg}</li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderNav;