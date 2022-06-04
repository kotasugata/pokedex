import { Parameter } from "@/components/atoms/Parameter";
import { Box, Typography } from "@mui/material";
import React from "react";

type Props = any;

export const PokemonBody: React.FC<Props> = (props) => {
  const { pokemon } = props;
  console.log(pokemon.abilities);
  return (
    <Box>
      <Box display="flex" mb={5}>
        <Typography>特性：</Typography>
        {pokemon.abilities.map(
          (item: { ability: { name: string } }, index: number) => (
            <Typography key={index} mr={2}>
              {item.ability.name}
            </Typography>
          )
        )}
      </Box>
      <Box>
        {pokemon.stats.map(
          (item: { stat: { name: string }; base_stat: number }) => (
            <>
              <Typography key={item.stat.name}>{item.stat.name}</Typography>
              <Parameter value={item.base_stat} />
            </>
          )
        )}
      </Box>
    </Box>
  );
};
