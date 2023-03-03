import axios from "axios";
import { Pokemon } from '../interfaces';

export const getPokemon = async (pokemondId: number): Promise<Pokemon> => {
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemondId}`)

    return data;
}