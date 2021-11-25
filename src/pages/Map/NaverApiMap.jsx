import React from "react";
import { isMobile } from "react-device-detect";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

export default function NaverApiMap({
  getDataForMarkers,
  setMarkerId,
  setClickDetail,
  setIsMarker,
  setShowBottomSheet,
}) {
  const navermaps = window.naver.maps;
  const onClickCloseBottomSheet = () => {
    if (isMobile) {
      setShowBottomSheet(false);
    }
  };
  return (
    <div>
      <RenderAfterNavermapsLoaded clientId={"cc08dar8r4"}>
        <NaverMap
          onClick={onClickCloseBottomSheet}
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
          defaultZoom={16}
        >
          {getDataForMarkers?.map((marker) => (
            <Marker
              key={marker.shop_id}
              onClick={() => {
                setMarkerId(marker.shop_id);
                setIsMarker(true); // marker에서 가져온 detail 상세가 뜨는거지
                setClickDetail(true);
                setShowBottomSheet(true);
              }}
              position={new navermaps.LatLng(marker.latitude, marker.longitude)}
              animation={0}
              icon={{
                url: "https://i.ibb.co/JBMG7b9/marker.png",
                size: { width: 44, height: 50 },
                scaledSize: { width: 44, height: 50 },
                // anchor: { x: 12, y: 32 },
              }}
            />
          ))}
        </NaverMap>
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

//props.markers
