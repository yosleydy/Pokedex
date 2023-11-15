import styles from './header.module.css';
import pokedex_mainjt_image from '../assets/pokedex_mainjt_image.png';

const Header = () => {
    return (
        <header className={styles.header}> 
            <img className={styles.pokeballImg} src={pokedex_mainjt_image} alt='Pokedex'/>
        </header>
    );
};

export default Header;