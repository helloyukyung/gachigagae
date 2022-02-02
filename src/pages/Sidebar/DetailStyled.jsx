import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";

export const MyBox = styled(Box)`
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
//Lottie CSS
export const LottieDogDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  .waiting {
    @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
    font-family: "Jua", sans-serif;
    font-size: 30px;
  }
`;

//전체 CSS

export const DetailNav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
  width: ${(props) => (props.Mobile ? "100%" : "450px")};
  height: ${(props) => (props.Mobile ? "5em" : "60px")};
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 9999;
`;
export const BackIcon = styled(ArrowBackIcon)`
  margin-left: 13px;
  :hover {
    color: #ffe680;
    cursor: pointer;
  }
`;
export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${(props) => (props.Mobile ? "0.8em" : "21px")};
`;
export const InfoInfo = styled.div`
  width: ${(props) => (props.Mobile ? "90vw" : "400px")};
  height: ${(props) => props.Mobile || "60vh"};
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8em;
  left: ${(props) => (props.Mobile ? "5vw" : "23px")};
  bottom: 0;
  top: ${(props) => (props.Mobile ? "35vh" : "15em")};
  padding-bottom: "10vh";

  background-color: white;
`;

export const Info = styled.div`
  margin-top: 6px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: ${(props) => (props.Mobile ? "2.5em" : "20px")};
  .barHeadName {
    font-size: ${(props) => (props.Mobile ? "2em" : "30px")};
  }
`;
export const InstagramLink = styled.a`
  text-decoration: none;
  :link {
    color: tomato;
  }
  :visited {
    color: tomato;
  }
  :hover {
    color: pink;
  }
`;

//Menu ver 2

export const MTablediv = styled.tbody`
  width: ${(props) => (props.Mobile ? "100%" : "400px")};
  height: ${(props) => props.Mobile || "40vh"};
`;
export const Tablediv = styled.tbody`
  width: ${(props) => (props.Mobile ? "100%" : "400px")};
  height: auto;
  padding-bottom: 5px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 80%;

  font-size: ${(props) => (props.Mobile ? "2.3em" : "20px")};

  .Menuheader {
    padding: 2px;
    padding-right: 5px;
    padding-left: 5px;
    background-color: #ffffb3;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
  .Menuinfo {
    padding-top: 3px;
    padding-right: 6px;
    padding-left: 5px;
    display: flex;
    justify-content: space-between;
  }
`;

//Menu
export const MenuKind = styled.span`
  margin-left: 15px;
  font-size: 23px;
  .Menu {
    padding: 4px;
    border-radius: 5px;
    background-color: lightgray;
  }
`;
export const MenuDiv = styled.div`
  padding-top: 10px;
  font-size: 30px;
`;
export const MMenuDiv = styled.div`
  padding-top: 0.5em;
  font-size: 3em;
`;

export const PhotoImg = styled.img`
  width: ${(props) => (props.Mobile ? "100vw" : "200px")};
  height: ${(props) => (props.Mobile ? "40vh" : "200px")};
`;

export const MenuBadge = styled.span`
  font-size: ${(props) => (props.Mobile ? "0.9em" : "17px")};
  padding: 3px;
  margin: 2px;
  border-radius: 6px;
  background-color: ${(props) => props.color || "lightgray"};
`;
export const MobileBottomCallDiv = styled.div`
  width: 100vw;
  height: 7vh;
  font-size: 3em;
  text-align: center;
  background-color: #ff9966;
  position: sticky;
  color: white;
  left: 0;
  bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 6px 6px 0 0;
  :hover {
    background-color: #ffe680;
    color: black;
    cursor: pointer;
  }
`;

export const BottomCall = styled.div`
  width: ${(props) => (props.Mobile ? "100vw" : "450px")};
  height: ${(props) => (props.Mobile ? "7vh" : "60px")};
  font-size: ${(props) => (props.Mobile ? "3em" : "35px")};
  text-align: center;
  background-color: #ff9966;
  position: fixed;
  color: white;
  left: 0;
  bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 6px 6px 0 0;

  :hover {
    background-color: #ffe680;
    color: black;
    cursor: pointer;
  }
`;
