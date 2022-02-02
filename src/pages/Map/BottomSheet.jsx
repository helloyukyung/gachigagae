import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LotttieDog from "../../components/Lottie/LotttieDog";
import { LottieDogDiv } from "../Sidebar/DetailStyled";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
  width: 100vw;
  height: 25vh;
  display: flex;
  align-items: center;
  padding: 0.5vh;
  padding-top: 0vh;
  font-size: 1.3em;
`;

const Info = styled.div`
  margin-left: 1em;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  width: 100vw;
  height: 25vh;
  font-size: 19px;
  padding-top: 1vh;
  padding-bottom: 2vh;

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
  width: 40vw;
  height: 20vh;
`;
const Span = styled.span`
  color: #333333;
  padding: 0.2em;
  margin: 0.2em;
  border-radius: 10%;
  box-shadow: 3px 3px 4px lightgray;
  background-color: ${(props) => props.backgroundColor || "lightgray"};
  white-space: nowrap;
`;

const StarIcon = styled.div`
  display: flex;
  justify-content: end;
`;

export default function BottomSheet({ markerId }) {
  // shopList Data
  const [bottomDetail, setBottomDetail] = useState(null);
  // loading & error hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const shopListURL = `${process.env.REACT_APP_API}shop/${markerId}`;

  const navigate = useNavigate();

  useEffect(() => {
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
  }, [shopListURL]);

  const onClickBottomSheet = () => {
    navigate("gachigagae/detail", { names: ["Brent", "Satya", "Michaś"] });
  };

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
      )
      <Container onClick={() => onClickBottomSheet()}>
        <Img
          className="phoneImage"
          alt={bottomDetail.id}
          src={bottomDetail.images[0]}
          width="40vw"
          height="30vh"
        />
        <Info>
          <div className="info-up">
            <div className="name-score">
              <div className="name">{bottomDetail.name}</div>
              <StarIcon> ⭐️ {bottomDetail.score}.0</StarIcon>
            </div>
            <div
              className="address"
              style={{
                width: "250px",
                whiteSpace: "noWrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
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
