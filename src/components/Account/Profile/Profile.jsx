import { Stack } from "@mui/material";
import { Form } from "./form";
import { Sidebar } from "../sidebar";

export const Profile = () => {
  return (
    <Stack direction={"row"} sx={{p: 0.5, m: 1, border: '4px solid lightGrey', borderRadius: 12}}>
      <Sidebar />
      <Form />
    </Stack>
  );
};
