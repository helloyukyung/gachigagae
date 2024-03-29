import React, { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//material UI
import Header from "./components/Header";
import Map from "./pages/Map";
import Sidebar from "./pages/Sidebar";
//component
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  //map에 marker 데이터를 전달(Browser)
  const [getDataForMarkers, setGetDataForMarkers] = useState(null);
  //marker.id 를 전달하기
  const [markerId, setMarkerId] = useState(null);
  // Detail sidebar 띄우기
  const [clickDetail, setClickDetail] = useState(false);
  // Marker를 클릭 했을때 MarkerURL이 true
  const [isMarker, setIsMarker] = useState(false);

  return (
    <>
      {/* mobile */}
      <MobileView>
        <Router>
          <Box>
            <CssBaseline />
            <Header setClickDetail={setClickDetail} />
            <Routes>
              <Route
                path="/gachigagae/"
                element={
                  <Map
                    getDataForMarkers={getDataForMarkers}
                    setMarkerId={setMarkerId}
                    setClickDetail={setClickDetail}
                    setIsMarker={setIsMarker}
                    markerId={markerId}
                  />
                }
              />
              <Route
                path="/gachigagae/list"
                element={
                  <Sidebar
                    setGetDataForMarkers={setGetDataForMarkers}
                    markerId={markerId}
                    clickDetail={clickDetail}
                    setClickDetail={setClickDetail}
                    isMarker={isMarker}
                    setIsMarker={setIsMarker}
                  />
                }
              />
            </Routes>
          </Box>
        </Router>
      </MobileView>
      {/* web */}
      <BrowserView>
        <Router>
          <Box>
            <CssBaseline />
            <Header setClickDetail={setClickDetail} setIsMarker={setIsMarker} />
            <Routes>
              <Route
                path="/gachigagae/"
                element={
                  <Box sx={{ flexGrow: 1, p: 0 }}>
                    <Sidebar
                      setGetDataForMarkers={setGetDataForMarkers}
                      markerId={markerId}
                      clickDetail={clickDetail}
                      setClickDetail={setClickDetail}
                      isMarker={isMarker}
                      setIsMarker={setIsMarker}
                    />
                    <Map
                      getDataForMarkers={getDataForMarkers}
                      setMarkerId={setMarkerId}
                      setClickDetail={setClickDetail}
                      setIsMarker={setIsMarker}
                    />
                  </Box>
                }
              />
            </Routes>
          </Box>
        </Router>
      </BrowserView>
    </>
  );
}

export default App;
