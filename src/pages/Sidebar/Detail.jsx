import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserView, MobileView } from "react-device-detect";
import { StylesProvider } from "@material-ui/core";
import {
  Container,
  Info,
  InstagramLink,
  DetailNav,
  BackIcon,
  MenuBadge,
  BottomCall,
  MenuDiv,
  LottieDogDiv,
  Table,
  Tablediv,
  InfoInfo,
} from "./DetailStyled";
import LotttieDog from "../../components/Lottie/LotttieDog";
import Pictures from "../../components/Pictures";

export default function DetailList({
  getId,
  markerId,
  setClickDetail,
  isMarker,
  setIsMarker,
}) {
  //detail Data
  const [detail, setDetail] = useState(null);
  // loading & error hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const URL = `http://sulrae.com/api/shop/${isMarker ? markerId : getId}`;

  //get detail Data
  useEffect(() => {
    console.log("axios2");
    const fetchShops = async () => {
      try {
        setError(null);
        setDetail(null);
        setLoading(true);
        const response = await axios.get(URL);
        setDetail(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchShops();
  }, [URL]);

  const BacktoSideBar = () => {
    setClickDetail(false);
    setIsMarker(false);
  };
  const Telphone = () => {
    alert(`매장 전화번호는 ${detail.tel}다개`);
  };

  if (loading)
    return (
      <LottieDogDiv>
        <LotttieDog />
        <div className="waiting">잠시만 기다리개</div>
      </LottieDogDiv>
    );
  if (error) return <div>Error</div>;
  if (!detail) return <div></div>;

  return (
    <>
      <MobileView>
        <Container>
          <DetailNav Mobile>
            <StylesProvider injectFirst>
              <BackIcon
                onClick={BacktoSideBar}
                sx={{ color: "#ff9966", fontSize: 36 }}
                // variant="contained"
              />
            </StylesProvider>
          </DetailNav>
          <Pictures
            shop_id={detail.shop_id}
            image1={detail.image1}
            image2={detail.image2}
            image3={detail.image3}
            image4={detail.image4}
            image5={detail.image5}
          />
          <InfoInfo Mobile>
            <Info>
              <div className="barHeadName">
                <b className="InfoShopName">{detail.name}</b>
                <br />
              </div>
              {detail.score}.0
              {detail.score === 5 && "⭐⭐⭐⭐⭐"}
              {detail.score === 4 && "⭐⭐⭐⭐☆"}
              {detail.score === 3 && "⭐⭐⭐☆☆"}
              {detail.score === 2 && "⭐⭐☆☆☆"}
              {detail.score === 1 && "⭐☆☆☆☆"}
              <br />
              {detail.address}
              <br />
              평일 운영시간 : {detail.open_time_weekday}
              <br />
              주말 운영시간 : {detail.open_time_weekend}
              <br />
              {!!detail.closed && `휴무일 : ${detail.closed}`}
              <br />
              {!!detail.instagram_url && (
                <InstagramLink href={detail.instagram_url} target="_blank">
                  인스타 링크 바로가기
                </InstagramLink>
              )}
            </Info>
            <MenuDiv>Menu</MenuDiv>
            <Table>
              <Tablediv Mobile>
                <tr className="Menuheader">
                  <th>Coffee</th>
                  <th>Price</th>
                </tr>
                {detail.menu.map((menu) => (
                  <tr className="Menuinfo">
                    {menu.category === "coffee" ? (
                      <td>
                        {menu.name}
                        {!!menu.is_main && (
                          <MenuBadge color="#ff9966">메인메뉴</MenuBadge>
                        )}
                        {!!menu.is_popular && (
                          <MenuBadge color="#ffe680">인기메뉴</MenuBadge>
                        )}
                      </td>
                    ) : null}
                    {menu.category === "coffee" ? <td> {menu.price}</td> : null}
                  </tr>
                ))}
              </Tablediv>
            </Table>
            <Table>
              <Tablediv Mobile>
                <tr className="Menuheader">
                  <th>Dessert</th>
                  <th>Price</th>
                </tr>
                {detail.menu.map((menu) => (
                  <tr className="Menuinfo">
                    {menu.category === "dessert" ? (
                      <td>
                        {menu.name}
                        {!!menu.is_main && (
                          <MenuBadge color="#ff9966">메인메뉴</MenuBadge>
                        )}
                        {!!menu.is_popular && (
                          <MenuBadge color="#ffe680">인기메뉴</MenuBadge>
                        )}
                      </td>
                    ) : null}
                    {menu.category === "dessert" ? (
                      <td> {menu.price}</td>
                    ) : null}
                  </tr>
                ))}
              </Tablediv>
            </Table>
            <br />
            <br />
            <br />
            <BottomCall Mobile onClick={Telphone}>
              전화해보개
            </BottomCall>
          </InfoInfo>
        </Container>
      </MobileView>
      <BrowserView>
        <Container>
          <DetailNav>
            <StylesProvider injectFirst>
              <BackIcon
                onClick={BacktoSideBar}
                sx={{ color: "#ff9966", fontSize: 36 }}
                // variant="contained"
              />
            </StylesProvider>
          </DetailNav>
          <Pictures
            shop_id={detail.shop_id}
            image1={detail.image1}
            image2={detail.image2}
            image3={detail.image3}
            image4={detail.image4}
            image5={detail.image5}
          />
          <InfoInfo>
            <Info>
              <div className="barHeadName">
                <b className="InfoShopName">{detail.name}</b>
                <br />
              </div>
              {detail.score}.0
              {detail.score === 5 && "⭐⭐⭐⭐⭐"}
              {detail.score === 4 && "⭐⭐⭐⭐☆"}
              {detail.score === 3 && "⭐⭐⭐☆☆"}
              {detail.score === 2 && "⭐⭐☆☆☆"}
              {detail.score === 1 && "⭐☆☆☆☆"}
              <br />
              {detail.address}
              <br />
              평일 운영시간 : {detail.open_time_weekday}
              <br />
              주말 운영시간 : {detail.open_time_weekend}
              <br />
              {!!detail.closed && `휴무일 : ${detail.closed}`}
              <br />
              {!!detail.instagram_url && (
                <InstagramLink href={detail.instagram_url} target="_blank">
                  인스타 링크 바로가기
                </InstagramLink>
              )}
            </Info>
            <MenuDiv>Menu</MenuDiv>
            <Table>
              <Tablediv>
                <tr className="Menuheader">
                  <th>Coffee</th>
                  <th>Price</th>
                </tr>
                {detail.menu.map((menu) => (
                  <tr className="Menuinfo">
                    {menu.category === "coffee" ? (
                      <td>
                        {menu.name}
                        {!!menu.is_main && (
                          <MenuBadge color="#ff9966">메인메뉴</MenuBadge>
                        )}
                        {!!menu.is_popular && (
                          <MenuBadge color="#ffe680">인기메뉴</MenuBadge>
                        )}
                      </td>
                    ) : null}
                    {menu.category === "coffee" ? <td> {menu.price}</td> : null}
                  </tr>
                ))}
              </Tablediv>
            </Table>
            <Table>
              <Tablediv>
                <tr className="Menuheader">
                  <th>Dessert</th>
                  <th>Price</th>
                </tr>
                {detail.menu.map((menu) => (
                  <tr className="Menuinfo">
                    {menu.category === "dessert" ? (
                      <td>
                        {menu.name}
                        {!!menu.is_main && (
                          <MenuBadge color="#ff9966">메인메뉴</MenuBadge>
                        )}
                        {!!menu.is_popular && (
                          <MenuBadge color="#ffe680">인기메뉴</MenuBadge>
                        )}
                      </td>
                    ) : null}
                    {menu.category === "dessert" ? (
                      <td> {menu.price}</td>
                    ) : null}
                  </tr>
                ))}
              </Tablediv>
            </Table>

            <br />
            <br />
            <br />

            <BottomCall onClick={Telphone}>전화해보개</BottomCall>
          </InfoInfo>
        </Container>
      </BrowserView>
    </>
  );
}
