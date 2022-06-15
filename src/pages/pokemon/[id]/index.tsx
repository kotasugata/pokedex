import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { PokemonHeader } from "@/components/molecules/PokemonHeader";
import { PokemonBody } from "@/components/molecules/PokemonBody";
import { Box, CircularProgress } from "@mui/material";

type Props = any;

const Pokemon: NextPage<Props> = (props) => {
  const { data } = props;
  return (
    <>
      <PokemonHeader pokemon={data} />
      <PokemonBody pokemon={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Pokemon;
