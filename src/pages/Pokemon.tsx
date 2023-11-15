import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import PokeballImg from '../assets/pokeball.png';
import Layout from "../components/Layout";
import styles from './pokemon.module.css';
import { PokemonDetails } from '../types/types';
import { fetchPokemon } from '../api/fetchPokemon';
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";
const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon,setPokemon] = useState<PokemonDetails>();
    const {name} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true);
            await waitFor(4000)
            const fetchedPokemon = await fetchPokemon(name as string);
            setPokemon(fetchedPokemon);
            setIsLoading(false)
        }
        getPokemon();
      }, [name]);
      if(isLoading || !pokemon){
        return <LoadingScreen/>
      }
    return (
        <Layout>
            <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                <img className={styles.pokeballImg} src={PokeballImg} alt='Pokeball'/>Volver
            </button>
            <div className={styles.gridcontainer}>
                <div className={styles.griditem}><img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={pokemon?.name} /></div>
                <div className={styles.griditem}>
                    <table className={styles.table}><thead>
                        <tr><th className={styles.pokemonTitle} colSpan={2}>{pokemon?.name?.toLowerCase()}</th></tr></thead>
                        <tbody>
                        <tr>
                            <td>Nr°</td>
                            <td>{pokemon?.id}</td>
                            </tr>
                            <tr>
                            <td>HP</td>
                            <td>{pokemon?.hp}</td>
                            </tr>
                            <tr>
                            <td>Attack</td>
                            <td>{pokemon?.attack}</td>
                            </tr>
                            <tr>
                            <td>Defense</td>
                            <td>{pokemon?.defense}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        </Layout>
    );
};

export default Pokemon;