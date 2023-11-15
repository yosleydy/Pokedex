import styles from './header.module.css';
type BuscadorProps = {
    query:string;
    setQuery:(query:string) => void;
}
const Buscador = ({query, setQuery}:BuscadorProps) => {
    return (
        <div className={styles.inputdiv}>
             <input className={styles.input} type='text' placeholder='Search a Pokemon'
            value={query} onChange={(ev) => setQuery(ev.target.value)}></input>
        </div>
    );
};

export default Buscador;