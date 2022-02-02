import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { PhotoImg } from "../pages/Sidebar/DetailStyled";
import { StylesProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
const MyCarousel = styled(Carousel)`
  width: ${(props) => (props.Mobile ? "100vw" : "450px")};
  height: ${(props) => (props.Mobile ? "40vh" : "300px")};
`;

export default function Pictures({ shop_id, images }) {
  return (
    <StylesProvider>
      <MobileView>
        <MyCarousel Mobile>
          {images?.map((img, key) => (
            <Paper key={key}>
              <PhotoImg Mobile alt={shop_id} src={img} />
            </Paper>
          ))}
        </MyCarousel>
      </MobileView>
      <BrowserView>
        <MyCarousel>
          {images?.map((img, key) => (
            <Paper key={key}>
              <img alt={shop_id} src={img} width={"100%"} />
            </Paper>
          ))}
        </MyCarousel>
      </BrowserView>
    </StylesProvider>
  );
}
