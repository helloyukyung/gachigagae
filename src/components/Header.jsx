import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
// import { TramRounded } from "@material-ui/icons";
import { IconContext } from "react-icons";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  .icon {
    padding-top: 0.3em;
    font-size: 2.3em;
    .closeButton {
      font-size: 1em;
      font-weight: 1.4em;
    }
  }
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

export default function Header({ setClickDetail, setIsMarker }) {
  const [iconShow, setIconShow] = useState(false);

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
            <Container>
              <div className="icon">
                <nav>
                  <IconContext.Provider value={{ color: "#fff" }}>
                    {!iconShow ? (
                      <Link to="/list">
                        <FaBars onClick={() => setIconShow(true)} />
                      </Link>
                    ) : (
                      <Link to="/">
                        <CgClose
                          className="closeButton"
                          onClick={() => setIconShow(false)}
                        />
                      </Link>
                    )}
                  </IconContext.Provider>
                </nav>
              </div>
              <Link to="/"></Link>
              <div className="Main" onClick={() => setIconShow(false)}>
                같이가개🐶
              </div>
              <div className="MainVer">v 1.0</div>
            </Container>
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
                <div className="Main">
                  <b>같이가개🐶</b>
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
