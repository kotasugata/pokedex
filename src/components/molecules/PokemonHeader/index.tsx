import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";

type Props = any;

export const PokemonHeader: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const backId = pokemon.id - 1 > 0 ? pokemon.id - 1 : undefined;
  const fowardId = pokemon.id + 1 < 152 ? pokemon.id + 1 : undefined;
  const imageId = pokemon.id.toString().padStart(3, "0");
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ my: 8 }}
    >
      {backId && (
        <Link href={`/pokemon/${backId}`}>
          <Button>
            <ArrowBackIosNewIcon />
          </Button>
        </Link>
      )}
      <Box sx={{ mx: 5 }}>
        <Image
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${imageId}.png`}
          alt="pokemonImage"
          width={150}
          height={150}
        />
      </Box>
      <Card sx={{ minWidth: 350, mx: 5 }}>
        <CardContent>
          <Typography fontSize={20} fontWeight="bold">
            No.{imageId}
          </Typography>
          <Typography variant="h4">{pokemon.name}</Typography>
          <Box display="flex">
            {pokemon.types.map(
              (item: { type: { name: string } }, i: number) => (
                <Typography key={i} sx={{ mr: 3 }}>
                  {item.type.name}
                </Typography>
              )
            )}
          </Box>
        </CardContent>
      </Card>
      {fowardId && (
        <Link href={`/pokemon/${fowardId}`}>
          <Button>
            <ArrowForwardIosIcon />
          </Button>
        </Link>
      )}
    </Box>
  );
};
