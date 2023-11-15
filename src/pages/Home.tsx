import Layout from '../components/Layout';
import pokedex from '../assets/pokedex.png';
import styles from './home.module.css';
const home = () => {
    return (
        <Layout>
            <div className={styles.diVImg}><img  className={styles.HomeImg} src={pokedex} alt='PokeHome'/></div>
                  <div className={styles.diVText}><p className={styles.homeP}>La Pokédex (ポケモン図鑑 Enciclopedia Ilustrada Pokémon en japonés, o Pokémon Dexter, también llamado Indexador Pokémon) 
            en el mundo Pokémon es una enciclopedia virtual portátil de alta tecnología que los entrenadores Pokémon llevan consigo para registrar las fichas de 
            todas las diversas especies Pokémon con las que se encuentran durante su viaje como entrenadores. En general, cuando se cumplen ciertos requisitos, 
            la capacidad de la Pokédex se puede aumentar permitiendo almacenar datos de otros Pokémon, que no son comunes, 
            como los legendarios y Pokémon que no son originarios de esa región. A dicha Pokédex "ampliada" se la conoce como Pokédex Nacional. 
            Según el episodio EP068 de la primera temporada en el anime, fue creada por el profesor Westwood V; sin embargo, en los videojuegos, 
            el creador es el profesor Oak.</p></div>
         </Layout> 
    );
};

export default home;