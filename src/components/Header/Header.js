import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import { FlexBox } from "./Styled/FlexBox";

const Header = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <FlexBox justifyContent="space-between">
          <img
            src="https://i.ibb.co/GV0gqff/logo2.png"
            style={{ width: "160px" }}
            alt="logo"
          />
          <Stack direction="row" spacing={4}>
            <IconButton>
              <ShoppingCartIcon></ShoppingCartIcon>
            </IconButton>
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
          </Stack>
        </FlexBox>
      </Container>
    </div>
  );
};

export default Header;
