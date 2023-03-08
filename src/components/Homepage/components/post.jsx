import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  Star,
  StarBorder,
} from "@mui/icons-material";
import { Badge, Box, Checkbox, styled, Typography } from "@mui/material";
import React from "react";

const PostDetail = styled(Box)({
  height: 280,
  width: 180,
  borderRadius: 3,
  boxShadow: "0 0 5px 5px rgba(231, 233, 235, 0.8)",
  cursor: 'pointer',
  // marginLeft: {xs: '100px', sm: '0px', md: '0px'}
});

const Post = () => {
  return (
    <PostDetail>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ mt: 2, pt: 2, }}
      >
        <Typography sx={{ bgcolor: "#739bff", px: 1.5 }}>SOLD</Typography>
        {/* <Badge badgeContent={4} color='error' sx={{mx:2}}> */}
        <Checkbox
          sx={{ py: 0 }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite color="error" />}
        />
        {/* </Badge> */}
      </Box>
      <Box>
        <Box sx={{ height: 100, m: 1 }}></Box>
        <Typography
          sx={{
            p: 1,
            fontSize: 15,
            color: "#739bff",
          }}
        >
          ISIHOR
        </Typography>
        <Typography
          sx={{
            px: 1,
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          A Room And Parlour self.con
        </Typography>
        <Star sx={{ color: "#f9cd33", mt: 1, mx: 0.5 }} />
        <Star sx={{ color: "#f9cd33", mt: 1, mx: 0.5 }} />
        <Star sx={{ color: "#f9cd33", mt: 1, mx: 0.5 }} />
        <StarBorder sx={{ color: "#f9cd33", mt: 1, mx: 0.5 }} />
        <StarBorder sx={{ color: "#f9cd33", mt: 1, mx: 0.5 }} />
      </Box>
    </PostDetail>
  );
};

export default Post;
