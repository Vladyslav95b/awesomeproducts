import { useState, useEffect } from 'react';
import { https } from '../../../api';
import Grid from '../../components/Grid';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState<any>([]) 

    useEffect(() => {
        https('/api/pokemon').then(res => setPokemons(res.data)).catch(e => console.log(e))
    }, [])
    return (
        <div className='container'>
            <Grid data={pokemons} />
        </div>
    )
}

export default Pokemon;