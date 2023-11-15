import {Link} from 'react-router-dom';
import styles from './footer.module.css';
//Assets
import PokemonPic from '../assets/pikachu.png'
import pokeball from '../assets/pokeball.png'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to='/pokemons' className={styles.footerLink}><img src={PokemonPic} alt='Pokeball' className={styles.footerIcon}/>Pokemons</Link>
            <Link to='/home' className={styles.footerLink}><img src={pokeball} alt='Pokeball' className={styles.footerIcon}/>Home</Link>
        </footer>
    );
};

export default Footer;