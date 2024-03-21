import { Skeleton, Stack } from "@mui/material";
import "./Skeleton.css";

export const CardSkeleton = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        border: "1px solid black",
        width: 290,
        padding: "1rem",
        margin: "5px",
      }}
    >
      <Skeleton
        variant="rectangular"
        width={250}
        height={120}
        animation="wave"
      />
      <Skeleton variant="text" width={200} height={40} animation="wave" />
      <Skeleton variant="text" width={250} height={40} animation="wave" />
      <Skeleton variant="text" width={100} height={40} animation="wave" />
      <Skeleton
        variant="rectangular"
        width={150}
        height={60}
        animation="wave"
      />
    </Stack>
  );
};
