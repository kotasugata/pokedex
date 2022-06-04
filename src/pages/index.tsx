import { PokemonList } from "@/components/organisms/PokemonList";
import { Typography } from "@mui/material";
import type { GetStaticProps, NextPage } from "next";

type Props = any;

const Home: NextPage<Props> = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <Typography variant="h4">ポケモン一覧</Typography>
      <PokemonList pokemonListApi={data.results} />
    </>
  );
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Home;
