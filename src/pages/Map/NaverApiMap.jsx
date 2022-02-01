import React, { useState } from "react";

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import { BrowserView, MobileView } from "react-device-detect";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

import BottomSheet from "./BottomSheet";
import { CloseFullscreenOutlined } from "@mui/icons-material";

export default function NaverApiMap({
  mobileData,
  getDataForMarkers,
  setMarkerId,
  setClickDetail,
  setIsMarker,
  markerId,
}) {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const navermaps = window.naver.maps;
  // const onClickCloseBottomSheet = () => {
  //   if (isMobile) {
  //     setShowBottomSheet(false);
  //   }
  // };

  return (
    <div>
      <RenderAfterNavermapsLoaded clientId={process.env.REACT_APP_CLIENT_ID}>
        <NaverMap
          id={"map"}
          mapDivId={"react-naver-map"}
          style={{
            width: "100%",
            position: "absolute",
            top: "0",
            bottom: "0",
          }}
          defaultCenter={
            new navermaps.LatLng(37.2840915640963, 127.012674868847)
          }
          defaultZoom={17}
        >
          <MobileView>
            {mobileData?.map((marker) => (
              <Marker
                style={{ margin: "-7px" }}
                key={marker.shop_id}
                onClick={() => {
                  setMarkerId(marker.shop_id);
                  setIsMarker(true);
                  setClickDetail(false);
                  setState(true);
                }}
                position={
                  new navermaps.LatLng(marker.latitude, marker.longitude)
                }
                animation={0}
                icon={{
                  url: "https://i.ibb.co/JBMG7b9/marker.png",
                  size: { width: 80, height: 86 },
                  scaledSize: { width: 90, height: 80 },
                  anchor: { x: 30, y: 100 },
                }}
              />
            ))}
            <Drawer
              anchor={"bottom"}
              open={state}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <BottomSheet markerId={markerId} />
            </Drawer>
          </MobileView>
          <BrowserView>
            {getDataForMarkers?.map((marker) => (
              <Marker
                key={marker.shop_id}
                onClick={() => {
                  setMarkerId(marker.shop_id);
                  setIsMarker(true);
                  setClickDetail(true);
                }}
                position={
                  new navermaps.LatLng(marker.latitude, marker.longitude)
                }
                animation={0}
                icon={{
                  url: "https://i.ibb.co/JBMG7b9/marker.png",
                  size: { width: 44, height: 50 },
                  scaledSize: { width: 44, height: 50 },
                  // anchor: { x: 12, y: 32 },
                }}
              />
            ))}
          </BrowserView>
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

//props.markers
