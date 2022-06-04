import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = any;

export const Parameter: React.FC<Props> = (props) => {
  const { value } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: `50%`, mr: 1 }}>
        <LinearProgress variant="determinate" value={value / 2} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          color="text.secondary"
        >{`${value}`}</Typography>
      </Box>
    </Box>
  );
};
