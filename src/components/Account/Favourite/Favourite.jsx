import { Stack } from "@mui/material";
import { Sidebar } from "../sidebar";
import { Wrap } from "./wrap";

export const Favourite = () => {
  return (
    <Stack
      direction={"row"}
      sx={{ p: 0.5, m: 1, border: "4px solid lightGrey", borderRadius: 12 }}>
      <Sidebar />
      <Wrap />
    </Stack>
  );
};
