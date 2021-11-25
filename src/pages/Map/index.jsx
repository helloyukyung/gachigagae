import React from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import NaverApiMap from "./NaverApiMap";

export default function Map({
  getDataForMarkers,
  setMarkerId,
  setClickDetail,
  setIsMarker,
  setShowBottomSheet,
}) {
  return (
    <>
      <Toolbar />
      <Typography>
        <NaverApiMap
          getDataForMarkers={getDataForMarkers}
          setMarkerId={setMarkerId}
          setClickDetail={setClickDetail}
          setIsMarker={setIsMarker}
          setShowBottomSheet={setShowBottomSheet}
        ></NaverApiMap>
      </Typography>
    </>
  );
}
