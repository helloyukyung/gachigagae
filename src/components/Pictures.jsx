import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { PhotoImg } from "../pages/Sidebar/DetailStyled";
import { StylesProvider } from "@material-ui/core/styles";
import styled from "styled-components";

const MyCarousel = styled(Carousel)`
  width: ${(props) => (props.Mobile ? "100%" : "450px")};
  height: ${(props) => (props.Mobile ? "80%" : "400px")};
`;

export default function Pictures({
  shop_id,
  image1,
  image2,
  image3,
  image4,
  image5,
}) {
  const images = [image1, image2, image3, image4, image5];

  return (
    <StylesProvider injectFirst>
      <MyCarousel Mobile>
        {images?.map((img) => (
          <Paper>
            <PhotoImg Mobile alt={shop_id} src={img} />
          </Paper>
        ))}
      </MyCarousel>
    </StylesProvider>
  );
}
