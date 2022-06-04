import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

type Props = any;

export const ContesntsCard: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const id = pokemon.id.toString().padStart(3, "0");
  return (
    <Link href={`pokemon/${pokemon.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${id}.png`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name}
            </Typography>
            {pokemon.types.map(
              (item: { type: { name: string } }, index: number) => (
                <Typography variant="body2" color="text.secondary" key={index}>
                  {item.type.name}
                </Typography>
              )
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
