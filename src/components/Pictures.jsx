import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { PhotoImg } from "../pages/Sidebar/DetailStyled";
import { StylesProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
const MyCarousel = styled(Carousel)`
  width: ${(props) => (props.Mobile ? "100%" : "450px")};
  height: ${(props) => (props.Mobile ? "80%" : "300px")};
`;

export default function Pictures({ shop_id, images }) {
  return (
    <StylesProvider injectFirst>
      <MobileView>
        <MyCarousel Mobile>
          {images?.map((img) => (
            <Paper key={shop_id}>
              <PhotoImg Mobile alt={shop_id} src={img} />
            </Paper>
          ))}
        </MyCarousel>
      </MobileView>
      <BrowserView>
        <MyCarousel>
          {images?.map((img) => (
            <Paper>
              <img alt={shop_id} src={img} width={"100%"} />
            </Paper>
          ))}
        </MyCarousel>
      </BrowserView>
    </StylesProvider>
  );
}
