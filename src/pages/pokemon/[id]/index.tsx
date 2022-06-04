import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { PokemonHeader } from "@/components/molecules/PokemonHeader";
import { PokemonBody } from "@/components/molecules/PokemonBody";
import { Box, CircularProgress } from "@mui/material";

const Pokemon: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
  };
  const { data, isLoading, isError, error } = useQuery("pokemon", fetchPokemon);
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <PokemonHeader pokemon={data} id={id} />
      <PokemonBody pokemon={data} />
    </>
  );
};

export default Pokemon;
