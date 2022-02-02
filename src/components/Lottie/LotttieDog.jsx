import React from "react";
import Lottie from "react-lottie";
import walkingDog from "./walkingDog.json";

const lottieOptions = {
  animationData: walkingDog,
  loop: false,
  autoplay: true,
};

export default function LotttieDog() {
  return (
    <d>
      <Lottie
        options={lottieOptions}
        style={{ width: "180px", height: "360px" }} // svg의 부모 div에 적용
      />
    </d>
  );
}
