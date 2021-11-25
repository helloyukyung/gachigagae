import React, { useEffect, useState } from "react";
import axios from "axios";
//Material UI
import { LottieDogDiv, MyBox } from "./DetailStyled";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
//components
import SideList from "./SideList";
import Detail from "./Detail";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import LotttieDog from "../../components/Lottie/LotttieDog";

export const drawerWidth = () => {
  if (isMobile) {
    return "100%";
  }
  return "450px";
};

export default function Sidebar({
  setGetDataForMarkers,
  markerId,
  clickDetail,
  setClickDetail,
  isMarker,
  setIsMarker,
}) {
  // shopList Data
  const [shopList, setShopList] = useState(null);
  // loading & error hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // to get detail

  const [getId, setGetId] = useState(null);

  const shopListURL = "http://sulrae.com/api/shop/";
  //get shopList Data
  useEffect(() => {
    const fetchShopList = async () => {
      try {
        setError(null);
        setShopList(null);
        setLoading(true);
        const response = await axios.get(shopListURL);
        setShopList(response.data);
        setGetDataForMarkers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchShopList();
  }, [setGetDataForMarkers]);

  if (loading)
    return (
      <LottieDogDiv>
        <LotttieDog />
        <div className="waiting">잠시만 기다리개</div>
      </LottieDogDiv>
    );
  if (error) return <div>Error</div>;
  if (!shopList)
    return <div>해당지역에는 아직 등록된 반려동물 허용카페가 없다개🐶 </div>;

  return (
    <>
      <MobileView>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "content-box",
            },
          }}
        >
          <Toolbar />
          {/* <Box sx={{ overflow: "auto" }}> */}
          <StylesProvider injectFirst>
            <MyBox>
              {clickDetail ? (
                <Detail
                  getId={getId}
                  setClickDetail={setClickDetail}
                  markerId={markerId}
                  isMarker={isMarker}
                  setIsMarker={setIsMarker}
                />
              ) : (
                <SideList
                  setGetId={setGetId}
                  shopList={shopList}
                  setClickDetail={setClickDetail}
                />
              )}
              <Divider />
            </MyBox>
          </StylesProvider>
        </Drawer>
      </MobileView>
      <BrowserView>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "content-box",
            },
          }}
        >
          <Toolbar />
          {/* <Box sx={{ overflow: "auto" }}> */}
          <StylesProvider injectFirst>
            <MyBox>
              {/* 컨텐츠 량에 따라 스크롤바를 추가할지 자동으로 결정*/}
              {clickDetail ? (
                <Detail
                  getId={getId}
                  setClickDetail={setClickDetail}
                  markerId={markerId}
                  isMarker={isMarker}
                  setIsMarker={setIsMarker}
                />
              ) : (
                <SideList
                  setGetId={setGetId}
                  shopList={shopList}
                  setClickDetail={setClickDetail}
                />
              )}
              <Divider />
            </MyBox>
          </StylesProvider>
        </Drawer>
      </BrowserView>
    </>
  );
}
