import classes from './content.module.scss';
import Popular from '../popular/popular.jsx';
import Catalog from '../catalog/catalog.jsx';
import Random from '../random/random.jsx';

const Main = () => {
return (
    <div className={classes.content}>
        <Catalog />
        <Popular />
        <Random />
    </div>
);
}

export default Main;
  