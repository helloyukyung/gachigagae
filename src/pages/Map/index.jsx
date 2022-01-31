import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NaverApiMap from "./NaverApiMap";
import { BrowserView, MobileView } from "react-device-detect";
import { LottieDogDiv } from "../Sidebar/DetailStyled";
import LotttieDog from "../../components/Lottie/LotttieDog";
import axios from "axios";
export default function Map({
  getDataForMarkers,
  setMarkerId,
  setClickDetail,
  setIsMarker,
  markerId,
}) {
  // shopList Data
  const [mobileData, setMobileData] = useState(null);
  // loading & error hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const shopListURL = `${process.env.REACT_APP_API}shop/`;
  useEffect(() => {
    const fetchShopList = async () => {
      try {
        setError(null);
        setMobileData(null);
        setLoading(true);
        const response = await axios.get(shopListURL);
        setMobileData(response.data);
        console.log(mobileData);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchShopList();
  }, []);

  if (loading)
    return (
      <LottieDogDiv>
        <LotttieDog />
        <div className="waiting">잠시만 기다리개</div>
      </LottieDogDiv>
    );
  if (error) return <div>Error</div>;
  if (!mobileData) return <div>반려동물 허용카페를 찾지 못했다개🐶 </div>;

  return (
    <>
      <MobileView>
        <>
          <Toolbar />
          <Typography>
            <NaverApiMap
              mobileData={mobileData}
              setMarkerId={setMarkerId}
              setClickDetail={setClickDetail}
              setIsMarker={setIsMarker}
              markerId={markerId}
            ></NaverApiMap>
          </Typography>
        </>
      </MobileView>

      <BrowserView>
        <>
          <Toolbar />
          <Typography>
            <NaverApiMap
              getDataForMarkers={getDataForMarkers}
              setMarkerId={setMarkerId}
              setClickDetail={setClickDetail}
              setIsMarker={setIsMarker}
            ></NaverApiMap>
          </Typography>
        </>
      </BrowserView>
    </>
  );
}
