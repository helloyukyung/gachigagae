import React from "react";
import ListItem from "@mui/material/ListItem";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  .infomation {
    margin-top: 0px;
    margin-bottom: 3px;
    font-size: 19px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .shopName {
      font-size: 22px;
    }
  }
`;

const Span = styled.span`
  color: #333333;
  font-size: 17px;
  padding: 3px;
  margin: 2px;
  border-radius: 23%;
  box-shadow: 3px 3px 4px lightgray;
  background-color: ${(props) => props.backgroundColor || "lightgray"};
  white-space: nowrap;
`;

const Img = styled.div`
  position: relative;
  .imgdiv {
    width: 160px;
    height: 160px;
  }
  .phoneImage {
    border-radius: 4%;
    margin-bottom: 2px;
  }
  .YKbadge {
    color: #4775d1;
    position: absolute;
    font-size: 25px;
    text-shadow: 3px 3px 3px black;
    top: 118px;
    left: 16px;
  }
`;
//mobile
const MContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  font-family: "Jua", sans-serif;
  width: 100%;
  height: 20rem;
  font-size: 2.5em;
`;
const MSpan = styled(Span)`
  font-size: 0.8em;
`;

const Info = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function SideList(props) {
  return (
    <>
      <MobileView>
        {props.shopList.map((shop) => (
          <MContainer>
            <ListItem
              button
              onClick={() => {
                props.setClickDetail(true);
                props.setGetId(shop.shop_id);
              }}
              key={shop.id}
            >
              <img
                className="phoneImage"
                alt={shop.id}
                src={shop.image1}
                width="30%"
                height="100%"
              />
              {/* {!!shop.yk_certification && (
                <span className="YKbadge">🙆‍♀️추천카페</span>
              )} */}

              <Info className="infomation">
                <div className="info-up">
                  <div className="name">
                    {shop.name}⭐{shop.score}.0
                  </div>
                  {shop.address_depth1}&nbsp;
                  {shop.address_depth2}&nbsp;
                  {shop.address_depth3}
                </div>
                <div className="badge">
                  {!!shop.has_insta && (
                    <MSpan backgroundColor="#ff80d5">🔥insta</MSpan>
                  )}
                  {!!shop.has_parking_lot && (
                    <MSpan backgroundColor="#80ccff">🚗주차가능</MSpan>
                  )}
                  {!!shop.has_group_seat && (
                    <MSpan backgroundColor="#71da71">👨‍👩‍👦‍👦단체석</MSpan>
                  )}
                  {!!shop.is_good_laptop && <MSpan>💻노트북</MSpan>}
                  {!!shop.large_dog_possible && (
                    <MSpan backgroundColor="#ffff66">🐕대형견</MSpan>
                  )}
                </div>
              </Info>
            </ListItem>
          </MContainer>
        ))}
      </MobileView>
      <BrowserView>
        {props.shopList.map((shop) => (
          <Container>
            <ListItem
              button
              onClick={() => {
                props.setClickDetail(true);
                props.setGetId(shop.shop_id);
              }}
              key={shop.id}
            >
              <Div>
                <Img>
                  <div className="imgdiv">
                    <img
                      className="phoneImage"
                      alt={shop.id}
                      src={shop.image1}
                      width="155px"
                      height="155px"
                    />
                  </div>
                  {!!shop.yk_certification && (
                    <span className="YKbadge">🙆‍♀️추천카페</span>
                  )}
                </Img>
                <div className="infomation">
                  <div>
                    <b className="shopName">{shop.name}</b> ⭐{shop.score}.0{" "}
                    <br />
                    {shop.address_depth1}&nbsp;
                    {shop.address_depth2}&nbsp;
                    {shop.address_depth3}
                    <br />
                  </div>
                  <div className="badge">
                    {!!shop.has_insta && (
                      <Span backgroundColor="#ff80d5">🔥insta</Span>
                    )}
                    {!!shop.has_parking_lot && (
                      <Span backgroundColor="#80ccff">🚗주차가능</Span>
                    )}
                    {!!shop.has_group_seat && (
                      <Span backgroundColor="#71da71">👨‍👩‍👦‍👦단체석</Span>
                    )}
                    {!!shop.is_good_laptop && <Span>💻노트북</Span>}
                    {!!shop.large_dog_possible && (
                      <Span backgroundColor="#ffff66">🐕대형견</Span>
                    )}
                  </div>
                </div>
              </Div>
            </ListItem>
          </Container>
        ))}
      </BrowserView>
    </>
  );
}

export default SideList;
