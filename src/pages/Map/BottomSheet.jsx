import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LotttieDog from "../../components/Lottie/LotttieDog";
import { LottieDogDiv } from "../Sidebar/DetailStyled";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  padding: 0.5em;
  font-size: 2.5em;
`;

const Info = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  height: 100%;
  .name-score {
    display: flex;
  }
  .name {
    font-size: 1.3em;
    font-weight: bold;
  }
`;
const Img = styled.img`
  border-radius: 10%;
`;
const Span = styled.span`
  color: #333333;
  font-size: 1em;
  padding: 0.2em;
  margin: 0.2em;
  border-radius: 10%;
  box-shadow: 3px 3px 4px lightgray;
  background-color: ${(props) => props.backgroundColor || "lightgray"};
  white-space: nowrap;
`;

export default function BottomSheet({ markerId }) {
  // shopList Data
  const [bottomDetail, setBottomDetail] = useState(null);
  // loading & error hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const shopListURL = `http://sulrae.com/api/shop/${markerId}`;
  useEffect(() => {
    console.log("bottom list");
    const fetchShopList = async () => {
      try {
        setError(null);
        setBottomDetail(null);
        setLoading(true);
        const response = await axios.get(shopListURL);
        setBottomDetail(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchShopList();
  }, [markerId]);

  console.log("detail : ", bottomDetail);
  if (loading)
    return (
      <LottieDogDiv>
        <LotttieDog />
        <div className="waiting">잠시만 기다리개</div>
      </LottieDogDiv>
    );
  if (error) return <div>Error</div>;
  if (!bottomDetail) return <div>반려동물 허용카페를 찾지 못했다개🐶 </div>;

  return (
    <>
      <Container onClick={console.log("ge")}>
        <Img
          className="phoneImage"
          alt={bottomDetail.id}
          src={bottomDetail.image1}
          width="45%"
          height="100%"
        />
        <Info>
          <div className="info-up">
            <div className="name-score">
              <div className="name">{bottomDetail.name}</div>⭐
              {bottomDetail.score}.0
            </div>
            <div className="address">
              {bottomDetail.address_depth1}&nbsp;
              {bottomDetail.address_depth2}&nbsp;
              {bottomDetail.address_depth3}
            </div>
          </div>
          <div className="badge">
            {!!bottomDetail.has_insta && (
              <Span backgroundColor="#ff80d5">🔥insta</Span>
            )}
            {!!bottomDetail.has_parking_lot && (
              <Span backgroundColor="#80ccff">🚗주차가능</Span>
            )}
            {!!bottomDetail.has_group_seat && (
              <Span backgroundColor="#71da71">👨‍👩‍👦‍👦단체석</Span>
            )}
            {!!bottomDetail.is_good_laptop && <Span>💻노트북</Span>}
            {!!bottomDetail.large_dog_possible && (
              <Span backgroundColor="#ffff66">🐕대형견</Span>
            )}
          </div>
        </Info>
      </Container>
    </>
  );
}
