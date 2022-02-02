import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserView, isMobile, MobileView } from "react-device-detect";
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
  MMenuDiv,
  MTablediv,
  TableBottom,
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
  const URL = `${process.env.REACT_APP_API}shop/${isMarker ? markerId : getId}`;

  //get detail Data
  useEffect(() => {
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
    if (isMobile) {
      return (window.location.href = `tel:${detail.tel}`);
    } else {
      detail.tel
        ? alert(`매장 전화번호는 '${detail.tel}'이다개`)
        : alert("매장번호가 없다개");
    }
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
        <Container key={detail.shop_id} Mobile>
          <DetailNav Mobile>
            <StylesProvider>
              <BackIcon
                onClick={BacktoSideBar}
                sx={{ color: "#ff9966", fontSize: "4em", paddingTop: "3vh" }}
              />
            </StylesProvider>
          </DetailNav>
          <Pictures shop_id={detail.shop_id} images={detail.images} />
          <InfoInfo Mobile>
            <Info Mobile>
              <div className="barHeadName">{detail.name}</div>
              {detail.score}.0
              {"⭐".repeat(detail.score)}
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
            <MMenuDiv>Menu</MMenuDiv>
            <Table Mobile>
              <MTablediv Mobile>
                <tr className="Menuheader">
                  <th>Coffee</th>
                  <th>Price</th>
                </tr>
                {detail.menu.map((menu, key) => (
                  <tr className="Menuinfo" key={key}>
                    {menu.category === "coffee" ? (
                      <td>
                        {menu.name}
                        {!!menu.is_main && (
                          <MenuBadge Mobile color="#ff9966">
                            메인메뉴
                          </MenuBadge>
                        )}
                        {!!menu.is_popular && (
                          <MenuBadge Mobile color="#ffe680">
                            인기메뉴
                          </MenuBadge>
                        )}
                      </td>
                    ) : null}
                    {menu.category === "coffee" ? <td> {menu.price}</td> : null}
                  </tr>
                ))}
              </MTablediv>
            </Table>
            <Table Mobile>
              <MTablediv Mobile Bottom>
                <tr className="Menuheader">
                  <th>Dessert</th>
                  <th>Price</th>
                </tr>
                {detail.menu.map((menu, key) => (
                  <tr className="Menuinfo" key={key}>
                    {menu.category === "dessert" ? (
                      <td>
                        {menu.name}
                        {!!menu.is_main && (
                          <MenuBadge Mobile color="#ff9966">
                            메인메뉴
                          </MenuBadge>
                        )}
                        {!!menu.is_popular && (
                          <MenuBadge Mobile color="#ffe680">
                            인기메뉴
                          </MenuBadge>
                        )}
                      </td>
                    ) : null}
                    {menu.category === "dessert" ? (
                      <td> {menu.price}</td>
                    ) : null}
                  </tr>
                ))}
              </MTablediv>
            </Table>
            <BottomCall Mobile onClick={() => Telphone()}>
              전화해보개
            </BottomCall>
          </InfoInfo>
        </Container>
      </MobileView>
      <BrowserView>
        <Container key={detail.shop_id}>
          <DetailNav>
            <StylesProvider>
              <BackIcon
                onClick={BacktoSideBar}
                sx={{ color: "#ff9966", fontSize: 36 }}
                // variant="contained"
              />
            </StylesProvider>
          </DetailNav>
          <Pictures shop_id={detail.shop_id} images={detail.images} />
          <InfoInfo>
            <Info>
              <div className="barHeadName">
                {detail.name}
                <br />
              </div>
              {detail.score}.0
              {"⭐️".repeat(detail.score)}
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
                {detail.menu.map((menu, key) => (
                  <tr className="Menuinfo" key={key}>
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
                {detail.menu.map((menu, key) => (
                  <tr className="Menuinfo" key={key}>
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
            <BottomCall onClick={Telphone}>전화해보개</BottomCall>
          </InfoInfo>
        </Container>
      </BrowserView>
    </>
  );
}
