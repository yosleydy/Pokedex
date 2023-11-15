import { useEffect, useState } from "react";
import Buscador from "../components/Buscador";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import styles from './pokemons.module.css';
import {fetchPokemos} from '../api/fetchPokemos';
import { Pokemon } from "../types/types.d";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";


const Pokemons = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchAllPokemons = async () => {
          setIsLoading(true);
          await waitFor(4000)
          const allPokemons = await fetchPokemos();
          setPokemons(allPokemons);
          setIsLoading(false)
        };
        fetchAllPokemons();
      }, []);

      if(isLoading || !pokemons){
        return <LoadingScreen/>
      }
      const filterPokemons = pokemons.slice(0,151).filter((pokemon) => {return pokemon.name.toLowerCase().match(query.toLowerCase())})
    return (
        <Layout>
          
        <Buscador query={query} setQuery={setQuery}/>
        <div className={styles.divNav}>
         <nav className={styles.nav}>
         {filterPokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
         </nav>
        </div>
        </Layout>
    );
};

export default Pokemons;