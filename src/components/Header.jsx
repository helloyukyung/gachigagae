import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
// import { TramRounded } from "@material-ui/icons";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 20%;

  .textLeft {
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .Main {
    text-decoration: none !important ;

    cursor: pointer;
    color: #f5f5f5;
    font-size: 2.5em;
    :hover {
      text-decoration: none !important ;
      color: #ffe680;
    }
  }
  .MainInfo {
    font-size: 2em;
    padding-left: 1em;
    padding-top: 0.28em;
    @media (max-width: 910px) {
      display: none;
    }
  }
  .MainVer {
    font-size: 1em;
    padding-top: 20px;
    color: black;
  }
`;
// Mobile
const MContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 3.5em;

  /* line-height: 5rem; */
  .MainVer {
    font-size: 20px;
    height: 70px;
    display: flex;

    flex-direction: column-reverse;
    color: black;
  }
`;
const StyledLink = styled(Link)`
  height: 70px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
`;
const Main = styled.div`
  font-size: 45px;
`;

export default function Header({ setClickDetail, setIsMarker }) {
  const [iconShow, setIconShow] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <MobileView>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar
            sx={{
              backgroundColor: "#ff9966",
              overflow: "hidden",
              textoverflow: "ellipsis",
            }}
          >
            <MContainer>
              {!iconShow ? (
                <StyledLink to="/gachigagae/list">
                  <FaBars
                    size="45"
                    style={{ color: "white" }}
                    onClick={() => {
                      setIconShow(true);
                      setClickDetail(false);
                    }}
                  />
                </StyledLink>
              ) : (
                <StyledLink to="/gachigagae/">
                  <CgClose
                    size="50"
                    style={{ color: "white" }}
                    className="closeButton"
                    onClick={() => setIconShow(false)}
                  />
                </StyledLink>
              )}
              <StyledLink to="/gachigagae/" onClick={() => setIconShow(false)}>
                <Main>같이가개🐶</Main>
              </StyledLink>
              <div className="MainVer">v 1.0</div>
            </MContainer>
          </Toolbar>
        </AppBar>
      </MobileView>
      <BrowserView>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar
            sx={{
              backgroundColor: "#ff9966",
              overflow: "hidden",
              textoverflow: "ellipsis",
            }}
          >
            <Container>
              <div className="textLeft">
                <div
                  className="Main"
                  onClick={() => {
                    setClickDetail(false);
                    navigate("/gachigagae/");
                    window.location.reload();
                  }}
                >
                  같이가개🐶
                </div>
                <div className="MainInfo">
                  <span style={{ color: "#60401f" }}>행궁동</span> 애견동반이
                  가능한 카페를 알려주는 서비스
                </div>
              </div>
              <div className="MainVer">v 1.0</div>
            </Container>
          </Toolbar>
        </AppBar>
      </BrowserView>
    </>
  );
}
