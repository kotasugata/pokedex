import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { ContesntsCard } from "@/components/molecules/ContentsCard";

type Props = { pokemonListApi: { name: string; url: string }[] };

export const PokemonList: React.FC<Props> = (props) => {
  const { pokemonListApi } = props;
  const [pokemonList, setPokemonList] = useState<{}[]>([]);
  const fetchPokemon = useCallback(() => {
    const promises = [];
    for (let i = 1; i < pokemonListApi.length; i++) {
      const url = `https:pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
      setPokemonList(results);
    });
  }, [pokemonListApi.length]);
  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <Box sx={{ my: 6, mx: 6 }}>
      <Grid
        container
        spacing={{ xs: 3, md: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        {pokemonList.map((pokemon, index) => (
          <Grid item key={index} spacing={{ xs: 3, md: 3 }} xs={1.5}>
            <ContesntsCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
