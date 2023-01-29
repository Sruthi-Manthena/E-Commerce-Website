import React from "react";
import { Box, styled, Typography } from "@mui/material";

const HelpBar = styled(Box)`
  background-color: var(--color-131921);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 24px;
`;

const HeaderTop = () => {
  return (
    <HelpBar>
      <Typography className="text-white" style={{ fontSize: "13px" }}>
        Free Shipping Over $100 & Free Returns
      </Typography>
      <Typography className="text-white" style={{ fontSize: "13px" }}>
        Hotline:
        <a className="text-white" href="tel:+91 9100012346">
          +91 9100012346
        </a>
      </Typography>
    </HelpBar>
  );
};

export default HeaderTop;
